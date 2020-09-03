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
    setBeer({ commit }, id) { //commit llama a mutaciones
      Axios.get(`https://us-central1-myfirstproyect-8aa5b.cloudfunctions.net/api/beers/${id}`).then((response) => {
        commit('SET_BEER', response.data)
      })
    },
    submitBeer({ dispatch }, beer) { //dispach llama a otras acciones
      Axios.post('https://us-central1-myfirstproyect-8aa5b.cloudfunctions.net/api/beers', beer).then(() => {
        dispatch('setBeers')
      })
    },
    deleteBeer({ dispatch }, id) {
      Axios.delete(`https://us-central1-myfirstproyect-8aa5b.cloudfunctions.net/api/beers/${id}`).then(() => {
        dispatch('setBeers') // dispach llama a las otra acciones
      })
    },
    updateBeer({ dispatch }, beer) {
      Axios.put(`https://us-central1-myfirstproyect-8aa5b.cloudfunctions.net/api/beers/${beer.id}`, beer.data).then(() => {
        dispatch('setBeers')
      })
    }
  },
  modules: {
  }
})
