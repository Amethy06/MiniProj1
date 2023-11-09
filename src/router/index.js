import Vue from 'vue'
import VueRouter from 'vue-router'
import QuemSouView from '../views/QuemSouView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'QuemSou',
    component: QuemSouView
  },
  {
    path: '/OQueFaco',
    name: 'OQueFaco',
    component: () => import('../views/OQueFaco.vue')
  },
  {
    path: '/Hobbies',
    name: 'Hobbies',
    component: () => import('../views/Hobbies.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
