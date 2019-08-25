import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/types'

Vue.use(Vuex)

const state = {
  history: []
}

const getters = {
  history: state => state.history
}

const mutations = {
  [types.GET_HISTORY] (state, response) {
    state.history.push(response)
  }
}

const actions = {
  async addResult ({ commit }, data) {
    commit(types.GET_HISTORY, data)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})