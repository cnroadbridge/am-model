import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: { name: 'StartUp' }
  },
  {
    path: '/start-up',
    name: 'StartUp',
    component: () => import('@views/StartUp.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@views/About.vue')
  },
  {
    path: '/model/asian',
    name: 'ModelAsian',
    component: () => import('@views/ModelAsian.vue')
  },
  {
    path: '/model/asian/male',
    name: 'ModelAsianMale',
    component: () => import('@views/ModelAsianMale.vue')
  },
  {
    path: '/model/asian/female',
    name: 'ModelAsianFemale',
    component: () => import('@views/ModelAsianFemale.vue')
  },
  {
    path: '/model/international',
    name: 'ModelInternational',
    component: () => import('@views/ModelInternational.vue')
  },
  {
    path: '/model/international/male',
    name: 'ModelInternationalMale',
    component: () => import('@views/ModelInternationalMale.vue')
  },
  {
    path: '/model/international/female',
    name: 'ModelInternationalFemale',
    component: () => import('@views/ModelInternationalFemale.vue')
  },
  {
    path: '/model-profile/:id',
    name: 'ModelProfile',
    component: () => import('@views/ModelProfile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
