import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginVue from '@/views/login.vue'
import forgot from '../views/forgot.vue'
import favourite from '@/views/favourite'
import ring from '@/views/ring'
import earring from '@/views/earring'
import necklaces from '@/views/necklaces'
import bracelets from '@/views/bracelets'
import payment from '@/views/payment'
import about from '@/views/about'
import order from '@/views/order'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '/necklaces',
    name: 'necklaces',
    component: necklaces
  },
  {
    path: '/payment',
    name: 'payment',
    component: payment
  },
  {
    path: '/bracelets',
    name: 'bracelets',
    component: bracelets
  },
  {
    path: '/favourite',
    name: 'favourite',
    component: favourite
  },
  {
    path: '/earring',
    name: 'earring',
    component: earring
  },
  {
    path: '/ring',
    name: 'ring',
    component: ring
  },
   {
    path: '/login',
    name: 'login',
    component: loginVue
  },
  {
    path: '/forgot',
    name: 'login',
    component: forgot
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
