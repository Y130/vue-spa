import Vue from 'vue'
import router from './router'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import App from './app'
import FastClick from 'fastclick'
import * as filters from '@/filters' // global filters

// 解决click点击300毫秒延时问题
FastClick.attach(document.body)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
// 全局配置
if (process.env.NODE_ENV === 'production') {
  Vue.config.debug = false
  Vue.config.devtools = false
  Vue.config.silent = true
  Vue.config.productionTip = false
}

setTimeout(function() {
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })
}, 0)

if (process.env.NODE_MOCK === 'mock') {
  require('@/mock') // simulation data
}
