import VueRouter from 'vue-router';
import ListView from './views/cnodeListView.vue'

Vue.use(VueRouter);

function createListView (type) {
  return {
    render (createElement) {
      return createElement(ListView, { props: { type } })
    }
  }
}

export default new VueRouter({
    routes: [{
        path: '',
        redirect: '/latest'
    }, {
        path: '/latest',
        component: createListView('all')
    }, {
        path: '/job',
        component: createListView('job')
    }, {
        path: '/ask',
        component: createListView('ask')
    }, {
        path: '/good',
        component: createListView('good')
    }]
});