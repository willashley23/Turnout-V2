// load data into process.env
require('dotenv').config();

const express = require('express');
const http = require('http');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./api');
const path = require('path');
const fs = require('fs');
const resolve = file => path.resolve(__dirname, file);
const isProduction = process.env.NODE_ENV === "production";
const { createBundleRenderer } = require('vue-server-renderer');
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`;

let server = express();
let apiServer = express();
apiServer.use(cors());
apiServer.use(bodyParser.json());

// init mysql
const connection = mysql.createConnection({
  host: isProduction ? process.env.DB_HOST_PROD : process.env.DB_HOST_DEV,
  user: isProduction ? process.env.DB_USER_PROD : process.env.DB_USER_DEV,
  password: isProduction ? process.env.DB_PASS_PROD : process.env.DB_PASS_DEV,
  database: isProduction ? process.env.DB_NAME_PROD : process.env.DB_NAME_DEV,
});

connection.connect(error => {
  if (error) console.error(error);
});

// sync models to the db
db.sequelize.sync()
  .then(() => {
    
    // Connect all our routes to our serverlication
    apiServer.use('/', routes);

    // verify authorization header middleware
    apiServer.use((req, res, next) => {
      // require every request to have an authorization header
      if (!req.headers.authorization) {
        return next(new Error('Authorization header is required'))
      }
      next();
    });

    apiServer.listen(8081, () => { console.log("API resource listening to port localhost:8081") });

    function createRenderer(bundle, options) {
      return createBundleRenderer(bundle, Object.assign(options, {
        // this is only needed when vue-server-renderer is npm-linked
        basedir: resolve('./dist'),
        // recommended for performance
        runInNewContext: false
      }));
    }
    
    let renderer;
    let readyPromise;
    const templatePath = resolve("../index.template.html");
    if (isProduction) {
      const template = fs.readFileSync(templatePath, 'utf-8');
      const bundle = require('./dist/vue-ssr-server-bundle.json');
      
      renderer = createRenderer(bundle, {
        template,
      });
    } else {
      readyPromise = require('../../build/setup-dev-server')(
        server,
        templatePath,
        (bundle, options) => {
          renderer = createRenderer(bundle, options)
        }
      );
    }

    const serve = (path, cache) => express.static(resolve(path), {
      maxAge: cache && isProduction ? 1000 * 60 * 60 * 24 * 30 : 0
    });

    server.use('/dist', serve('./dist', true));

    function render(req, res) {
      const s = Date.now();
    
      res.setHeader("Content-Type", "text/html");
      res.setHeader("Server", serverInfo);
    
      const handleError = err => {
        if (err.url) {
          res.redirect(err.url)
        } else if (err.code === 404) {
          res.status(404).send('404 | Page Not Found')
        } else {
          // Render Error Page or Redirect
          res.status(500).send('500 | Internal Server Error');
          console.error(`error during render : ${req.url}`);
          console.error(err.stack);
        }
      }
    
      const context = {
        title: 'Vue HN 2.0', // default title
        url: req.url
      };
      renderer.renderToString(context, (err, html) => {
        if (err) {
          return handleError(err);
        }
        res.send(html)
        if (!isProduction) {
          console.log(`whole request: ${Date.now() - s}ms`);
        }
      });
    }
    
    server.get('*', isProduction ? render : (req, res) => {
      readyPromise.then(() => render(req, res));
    });
    
    server.listen(process.env.PORT || 8080, () => {
      console.log('listening to port localhost:8080');
    });
  });