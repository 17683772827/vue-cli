import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: ['ooo']
  },
  mutations: {
    setHistory: (state, val) => {
      state.history = val
    }
  },
  actions: {
    setHistory (context, val) {
      context.commit('setHistory', val)
    }
  },
  modules: {
  },
  getters: {
    history: state => state.history
  }
})
