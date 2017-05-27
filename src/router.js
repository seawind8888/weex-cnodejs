import VueRouter from 'vue-router';
import List from './views/cnode-list.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '',
        redirect: '/latest'
    }, {
        path: '/latest',
        component: List
    }]
});