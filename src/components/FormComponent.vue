<template>
  <div class="=container">
    <form @submit.prevent="createBeer">
  <div class="form-group">
    <label for="formGroupExampleInput">Nombre de la nueva cerveza</label>
    <input type="text" class="form-control" v-model="currentBeer.name">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Precio</label>
    <input type="number" class="form-control" v-model="currentBeer.price">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Link imagen</label>
    <input type="text" class="form-control" v-model="currentBeer.picture">
  </div>
  <button class="btn btn-info mb-2 mt-2">Crear</button>
</form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: {
    currentBeer: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions (['submitBeer']),
    createBeer() {
      const beer = {
        name: this.name,
        price: this.price,
        picture: this.picture
      }
      this.submitBeer(beer)
      this.name = '',
      this.price = 0,
      this.picture = ''
    },
    editBeer(beer) {
      this.$emit('edit-beer', beer)
    }
  }
}
</script>

<style>

</style>