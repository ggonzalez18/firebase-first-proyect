<template>
  <div id="app">
    <div class="bg-dark mb-5">
      <nav class="navbar-dark pt-3 pb-3 container">
        <router-link to="/">Home</router-link> |
        <router-link to="/admin">Admin</router-link>
    </nav>
    </div>
    <router-view/>
  </div>
</template>

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

nav a.router-link-exact-active {
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
}
</style>
