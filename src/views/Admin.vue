<template>
  <div class="container">
    <h1>Bienvenido {{ currentUser.email}}</h1>
    <div>
      <ul>
        <li v-for="beer in beers" :key="beer.id">{{beer.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser', 'beers'])
  },
  methods: {
    ...mapActions(['setBeers'])
  },
  created() {
    this.setBeers
  }
}
</script>

<style>

</style>