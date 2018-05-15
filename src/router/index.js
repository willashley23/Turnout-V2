import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'
import Blocked from '@/components/Blocked'
//import EventIndex from '@/components/event/EventIndex'
import Foo from '@/components/Foo'

Vue.use(Router);

export function createRouter() {
  const router = new Router({
    routes: [
      {
        path: '/',
        name: 'EventIndex',
        component: () => import('../components/event/EventIndex')
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

  return router;
}