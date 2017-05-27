import router from './router'
import App from './App.vue'

new Vue(Vue.util.extend({ el: '#root', router }, App))

router.push('/')