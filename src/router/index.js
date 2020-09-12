import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from 'components/recommend'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'Home',
    component: Recommend
  }
]

const router = new VueRouter({
  routes
})

export default router
