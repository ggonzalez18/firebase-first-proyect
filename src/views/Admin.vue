<template>
  <div class="container">
    <h1 class="mb-4">Bienvenido {{ currentUser.email}}</h1>
    <div class="card mb-3" style="max-width: 540px;" v-for="beer in beers" :key="beer.id">
      <div class="row no-gutters">
        <div class="col-md-4 col-lg-6">
          <img :src="beer.data.picture" class="card-img" alt="...">
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <h3 class="card-title">{{beer.data.name}}</h3>
            <p class="card-text">Valor: $ {{beer.data.price}}</p>
            <router-link :to="{name:'Beer', params:{id:beer.id}}"> Click Aquí</router-link>
          </div>
        </div>
      </div>
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
    this.setBeers()
  }
}
</script>

<style>
.img {
  background-size: cover;
  background-position: center;
}
</style>