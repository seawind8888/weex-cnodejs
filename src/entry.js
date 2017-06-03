import router from './router'
import App from './App.vue'
import filters from './filters';
import store from './store'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue(Vue.util.extend({ el: '#root', router, store }, App))

router.push('/')