import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import firebaseConfig from '../config/firebase.js'

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

let app
firebase.auth().onAuthStateChanged(() => { // no se pierden las credenciales de usuario al hacer refresh
  if (!app) {
    app =
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})