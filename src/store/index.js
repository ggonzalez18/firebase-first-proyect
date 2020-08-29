import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: undefined,
    beers: [],
    beer: undefined,
  },
  mutations: {
    SET_USER(state, user) {
      state.currentUser = user
    },
    SET_BEERS(state, beers) {
      state.beers = beers
    },
    SET_BEER(state, beer) {
      state.beer = beer
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    setBeers({ commit }) {
      Axios.get('https://us-central1-myfirstproyect-8aa5b.cloudfunctions.net/api/beers').then((response) => {
        commit('SET_BEERS', response.data)
      })
    },
    setBeer({ commit }, id) {
      Axios.get(`https://us-central1-myfirstproyect-8aa5b.cloudfunctions.net/api/beers/${id}`).then((response) => {
        commit('SET_BEER', response.data)
      })
    }
  },
  modules: {
  }
})
