import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Application from 'components/application/application'
import Games from 'components/games/games'
import Rank from 'components/rank/rank'
import Applist from 'components/applist/applist'

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
  },
  {
    path: '/application',
    name: 'Application',
    component: Application,
    children: [
      {
        path: ':id',
        component: Applist
      }
    ]
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank
  }
]

const router = new VueRouter({
  routes
})

export default router
