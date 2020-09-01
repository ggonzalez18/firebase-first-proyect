<template>
  <div class="bg-dark mb-5">
      <nav class="navbar navbar-expand-lg navbar-dark pt-3 pb-3 container">
        <div class="navbarNav ml-auto">
          <ul class="navbar-nav text-uppercase">
            <li class="">
              <router-link class="style-link" to="/" v-if="!currentUser">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="style-link" to="/admin">Admin</router-link>
            </li>
            <li v-if="currentUser">
              <a class="style-link" @click.prevent="logout" href="#">Salir</a>
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
.style-link {
  display: block;
  padding: .5rem 1rem;
  color: white;
  text-decoration: none;
}

.style-link:hover {
  color: rgb(0, 169, 199);
  text-decoration: none;
}
</style>