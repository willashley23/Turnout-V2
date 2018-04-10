import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import HelloWorld from '@/components/HelloWorld'
import Blocked from '@/components/Blocked'
import Foo from '@/components/Foo'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path:'/foo',
        name: 'foo',
        component: Foo,
        props: true,
    },
    {
      path: '/blocked',
      name: 'blocked',
      meta: { requireAuth: true },
      component: Blocked
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!store.state.session.currentUser) {
      router.app.$modal.show("auth-modal");
      next(false);
    } else {
      next();
    }
  } else {
    next();
  }
})
// todo -- refactor routes into separate files
export default router