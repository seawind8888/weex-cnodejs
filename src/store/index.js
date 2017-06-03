import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
    actions,
    mutations,
    getters,
    state: {
        isRefresh: false,
        listInfo: ''
    },
})