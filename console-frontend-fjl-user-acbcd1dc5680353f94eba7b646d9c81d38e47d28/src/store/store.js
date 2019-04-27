import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  themeData: '',
  theme_name: '',
}
const mutations = {
  THEMEDATA(state, value) {
    state.themeData = value
  },
  THEMEDATA2(state, value) {
    state.theme_name = value
  }
}

export default new Vuex.Store({
  state,
  mutations
})
