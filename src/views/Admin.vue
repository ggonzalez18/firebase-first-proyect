<template>
  <div class="container">
    <h1 class="mb-4">Bienvenido {{ currentUser.email}}</h1>
      <form-component></form-component>
      <section v-for="beer in beers" :key="beer.id">
        <div class="row">
          <div class="col-lg-8">
            <div class="card mb-3" style="max-width: 800px;">
              <div class="row no-gutters">
                <div class="col-md-4 col-lg-6">
                  <img :src="beer.data.picture" class="card-img" alt="...">
                </div>
                <div class="col-md-6 col-lg-6">
                  <div class="card-body">
                    <h3 class="card-title">{{beer.data.name}}</h3>
                    <p class="card-text">Valor: $ {{beer.data.price}}</p>
                    <router-link :to="{name:'Beer', params:{id:beer.id}}"> Click Aquí</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <button @click="deleteBeer(beer.id)" class="btn btn-info ml-2 mb-2 mt-2">Eliminar</button>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import FormComponent from '../components/FormComponent'

export default {
  components: {
    FormComponent
  },
  computed: {
    ...mapState(['currentUser', 'beers'])
  },
  methods: {
    ...mapActions(['setBeers', 'deleteBeer'])
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