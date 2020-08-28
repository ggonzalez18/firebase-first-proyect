<template>
  <div class="bg-dark mb-5">
      <nav class="navbar navbar-expand-lg navbar-dark pt-3 pb-3 container mr-auto">
        <div class="navbarNav ml-auto">
          <ul class="navbar-nav">
            <li class="">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
            <li v-if="currentUser">
              <a class="nav-link" @click.prevent="logout" href="#">Salir</a>
            </li>
          </ul>
        </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions(['setUser']),
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
        this.setUser(undefined)
      })
    }
  },
  computed: {
  ...mapState(['currentUser'])
  }
}
</script>

<style>
</style>