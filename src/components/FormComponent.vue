<template>
  <div class="=container">
    <form @submit.prevent="submitForm">
  <div class="form-group">
    <label for="formGroupExampleInput">Nombre de la nueva cerveza</label>
    <input type="text" class="form-control" v-model="currentBeer.data.name">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Precio</label>
    <input type="number" class="form-control" v-model="currentBeer.data.price">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Link imagen</label>
    <input type="text" class="form-control" v-model="currentBeer.data.picture">
  </div>
  <button class="btn btn-danger mb-5 mt-2">{{currentBeer.id ? 'Editar' : 'Ingresar Nueva' }}</button>
</form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'form-component',
  props: {
    currentBeer: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions (['submitBeer']),
    submitForm() {
      if (this.currentBeer.id) { //si existe editamos
        this.$emit('edit-beer', this.currentBeer)
      } else { // si no existe creamos una nueva cerveza
        this.createBeer()
      }
      this.cleanCurrentBeer()
    },
    createBeer() {
      const beer = {
        name: this.currentBeer.data.name,
        price: this.currentBeer.data.price,
        picture: this.currentBeer.data.picture
      }
      this.submitBeer(beer) // metodo del store que hace la llamada a axiosApi
    },
    cleanCurrentBeer() {
      this.currentBeer.data.name = '',
      this.currentBeer.data.price = 0,
      this.currentBeer.data.picture = '',
      this.currentBeer.id = undefined
    }
  }
}
</script>

<style>

</style>