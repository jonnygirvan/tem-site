import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Service from '../views/Service.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component: Services
      },
      {
        path: '/services/:service',
        component: Service,
        name: 'Service'
      }
    ]
  },
  {
    path: '/facilities',
    name: 'Facilities',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Facilities.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior (to) {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //       // , offset: { x: 0, y: 10 }
  //     }
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})

export default router
