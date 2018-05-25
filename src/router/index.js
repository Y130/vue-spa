import Vue from 'vue'
import Router from 'vue-router'

// const _import = require('./_import_' + process.env.NODE_ENV)
const _import = require('./_import.js')

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/401', component: _import('error/401') },
  { path: '/404', component: _import('error/404') },
  {
    path: '',
    redirect: 'home',
    children: [{
      path: 'home',
      component: _import('app'),
      name: 'home'
    }]
  },
  { path: '*', redirect: '/404' }
]

export default new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
