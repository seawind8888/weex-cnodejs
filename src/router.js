import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = resolve => {
    require.ensure(['./App.vue'], () => {
        resolve(require('./App.vue'));
    });
};

const List = resolve => {
    require.ensure(['./views/cnode-list.vue'], () => {
        resolve(require('./views/cnode-list.vue'));
    });
};

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/latest',
        name: 'latest',
        component: List
    }, {
        path: '/',
        component: Home
    }]
});