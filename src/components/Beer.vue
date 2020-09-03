<template>
  <div>
    <!-- {{beer}} -->
    <section class="container">
    <h1 class="title text-center mb-5">CERVEZA <br> {{beer.data.name}}</h1>
      <div class="row">
        <div class="col-lg-6">
        <h5>{{beer.data.description}}</h5>
          <div class="row">
            <div class="col-lg-6">
              <p class="descriptions">Maridaje:</p>
              <p> {{beer.data.pairing}} </p>
            </div>
            <div class="col-lg-6">
              <p class="descriptions">Ingredientes:</p>
              <p> {{beer.data.ingredients}} </p>
            </div>
          </div>
          <div>
            <p class="descriptions">Notas de Cata:</p>
            <p> {{beer.data.tastingNotes}} </p>
          </div>
           <div>
            <span class="descriptions">Grado Alcohólico:</span>
            <span> {{beer.data.grade}}° </span>
          </div>
          <router-link class="btn btn-secondary mt-3 mb-3" to="/admin">Volver</router-link>
        </div>
        <div class="col-lg-6"><img :src="beer.data.picture" class="card-img ml-3" alt="..."></div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  created() {
    this.setBeer(this.$route.params.id)
  },
  computed:{
    ...mapState(['beer'])
  },
  methods: {
    ...mapActions(['setBeer'])
  }
}
</script>

<style>
.img{
  text-align: center;
}
.descriptions {
  font-family: 'Oleo Script', cursive;
  font-size: 20px;
}
</style>