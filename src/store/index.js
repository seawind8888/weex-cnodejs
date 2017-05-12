import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

const store = new Vuex.Store({
  actions,
  mutations,
})

export default store