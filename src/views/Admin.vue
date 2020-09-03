<template>
  <div class="container">
    <h1 class="mb-4 welcome">Bienvenido {{ currentUser.email}}</h1>
      <form-component @edit-beer='beerUpdate' :currentBeer="currentBeer"></form-component>
      <section v-for="beer in beers" :key="beer.id">
        <div class="row">
          <div class="col-lg-8">
            <div class="card mb-3" style="max-width: 800px;">
              <div class="row no-gutters">
                <div class="col-md-4 col-lg-6">
                  <img :src="beer.data.picture" class="card-img ml-3" alt="...">
                </div>
                <div class="col-md-6 col-lg-6">
                  <div class="card-body">
                    <h2 class="card-title title">CERVEZA <br> {{beer.data.name}}</h2>
                    <h3 class="card-text value" >Valor: $ {{beer.data.price}}</h3>
                    <router-link :to="{name:'Beer', params:{id:beer.id}}" class="btn btn-secondary">Ver Detalles</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <button @click="deleteBeer(beer.id)" class="btn btn-info ml-2 mb-2 mt-2">Eliminar</button>
            <button @click="setCurrentBeer(beer)" class="btn btn-success ml-2 mb-2 mt-2">Modificar</button>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import FormComponent from '../components/FormComponent'

export default {
  data() {
    return {
      currentBeer: {
        data: {
          name: '',
          price: 0,
          picture: ''
          },
        id: undefined
      }
    }
  },
  components: {
    FormComponent
  },
  computed: {
    ...mapState(['currentUser', 'beers'])
  },
  methods: {
    ...mapActions(['setBeers', 'deleteBeer', 'updateBeer']),
    setCurrentBeer(beer) {
      this.currentBeer = beer
    },
    beerUpdate(beer) {
      const newBeer = {
        data: {
          name: beer.data.name,
          price: beer.data.price,
          picture: beer.data.picture
        },
        id: beer.id
      }
      this.updateBeer(newBeer),
      this.currentBeer.data.name = '',
      this.currentBeer.data.price= 0,
      this.currentBeer.data.picture = ''
    }
  },
  created() {
    this.setBeers()
  }
}
</script>

<style>
.value {
  font-weight: 500;
  color: gray;
}

.title {
  font-family: 'Anton', sans-serif;
}
.welcome {
  font-family: 'Oleo Script', cursive;
  font-size: 50px;
  text-align: center;
}

</style>