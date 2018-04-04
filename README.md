# Turnout V2

A refactor of the 2016 implementation of Turnout. 

## Background

In September 2016, I wrote Turnout as my first full stack project. It was a personal challenge to apply all I had learned in web development. The core technologies in the stack were:

* React
* Redux
* Ruby on Rails
* PostgreSQL
* Webpack

It is a solid stack that served me well. But the world of the web does not sit still. And until scientsts can accurately calculate the half-life of a JavaScript framework, we front end developers must be ready and willing to stay at the top of our game. And looking back on it, there is much to improve upon here. Working at both Rheo and Fundbox have given me insights into what I would have done differently. To that end, Turnout V2 is built on the following stack:

* Vue.js
* VueX
* Node
* Sequelize
* Axios
* Epilogue
* Sass
* Pug
* Mocha and Chai / Jest
* Cypress
* Webpack
* Some Crypto Library

Let me go over these choices bit by bit

## Why Vue?

Ah, the eternal question. Why did you choose *x* framework? I am a huge fan of React. I love the virtual DOM, the ease of creating components, and its snappy behavior, but I wanted to give Vue a chance because of its recent rise to prominence. After looking it over, it is clear that Vue brings a lot to the table. It borrows somethings I like from, dare I say, *Angular 1.x*, such as directives. The lack of directives makes things like conditional rendering in React a bit ham-handed, and contrivances like "className" abound. But Vue is also inspired by React, with its own virtual DOM implementation. Both are excellent frameworks. Being always at the cutting edge of front end development is really important to me as a developer, so it made sense to take risks with this project and try something different. 

## Other Technologies

As I see it, Rails is on its last legs. While there are plenty of production-scale apps out there still relying on it, not many projects are built on Rails these days. In terms of performance, Node blows Rails out of the water simply by virtue of the fact that Ruby is a slow language. And – for better or for wrose –  the "everything must be JavaScript" convergence seems to be winning. Node and Golang are the only games in town.

When I first name Turnout, I didn't use a pre-processor for styles. *This was a mistake.* Looking back on it and seeing that massive css file that houses *all* of the app's style makes me cringe. Vue is the antithesis of this with its notion of single-file components. In fact, today, there is really no reason to not use a pre-processor. They are simply more intutive, streamlined, and readable. I also was bound by JSX, but no longer, and am happy to be using Pug, which I find to be an excellent templating language.

I didn't get a chance to write unit tests last time, so I'll be doing that this time around. If I'm feeling *really* ambitious, I'll add webdriver tests using Cypress. I'm really excited for what Cypress has to offer, and as someone who has *suffered* though the crucible that is writing Selenium tests, I think this will be a welcome experiment. I want to consider using Parcel as a module bundler, becuase bleeding edge, but may not have time. 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Tasks

### Refactor
 - Create shared close button out of the current one
 - Find more ways to abstract modal logic
 - Find way to use the route blocking to show the modal globally and redirect to "/"
 - Investigate `mapState` to avoid `this.$store.state.foo.bar.baz`
 - Use `async` instead of `promises`
 
 

 ### Optimizations
 - Investigate way around having to include modal component inside each rendering instance