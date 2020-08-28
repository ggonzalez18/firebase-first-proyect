<template>
  <div class="container">
    <h1>Bienvenido {{ currentUser.email}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style>

</style>