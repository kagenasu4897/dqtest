import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import VueGoodTablePlugin from 'vue-good-table'

// add to component
components: {
  VueGoodTablePlugin
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dqtact',
    name: 'dqtact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DQTACTView.vue')
  },
  {
    path: '/k_kakin',
    name: 'k_kakin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/k_kakin/View.vue')
  },
  {
    path: '/dqtact2020',
    name: 'dqtact2020',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/2020/View.vue')
  },
  {
    path: '/dqtact2021',
    name: 'dqtact2021',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/2021/View.vue')
  },
  {
    path: '/dqtact2022',
    name: 'dqtact2022',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/2022/View.vue')
  },
  {
    path: '/dqtact2023',
    name: 'dqtact2023',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/2023/View.vue')
  },
  {
    path: '/dqtact2024',
    name: 'dqtact2024',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/2024/View.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
