<template>
  <div id="app">
    <AppNavbar/>
    <router-view/>
  </div>
</template>

<script>

import AppNavbar from '@/components/AppNavbar.vue'

export default {
  components: {
    AppNavbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

/* nav a router-link {
  color: #42b983;
  text-decoration: none;
} */

</style>
