import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/imageEl',
    name: 'imageEl',
    // route level code-splitting`
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/imageEl.vue')
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import(/* webpackChunkName: "about" */ '../views/echarts.vue')
  },
  {
    path: '/busA',
    name: 'busA',
    component: () => import(/* webpackChunkName: "about" */ '../views/EvenBus/busA.vue')
  },
  {
    path: '/busB',
    name: 'busB',
    component: () => import(/* webpackChunkName: "about" */ '../views/EvenBus/busA.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
