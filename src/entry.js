import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './common/mixin'
import {
    sync
} from 'vuex-router-sync';

sync(store, router);
Vue.mixin(mixins)
new Vue(Vue.util.extend({ el: '#root', router, store }, App))

router.push('/')