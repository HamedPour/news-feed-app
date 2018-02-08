import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    chosenNewsSource: null,
    newsArticles: null
  },
  // --------------------------------------------------------------------Mutations
  mutations: {
    gettonArticles (state, payload) {
      state.newsArticles = payload
    }
  },
  // ----------------------------------------------------------------------Actions
  actions: {
    getArticles ({commit}, payload) {
      const apiKey = '6edbd732ff0f4c9ebd6c3438bdfffe7c'
      const newsId = payload
      axios.get('https://newsapi.org/v1/articles?source=' + newsId + '&apiKey=' + apiKey)
        .then(res => {
          return res.data.articles
        })
        .then(data => {
          commit('gettonArticles', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  // ----------------------------------------------------------------------Getters
  getters: {
    getArticles (state) {
      return state.newsArticles
    }
  }
})
