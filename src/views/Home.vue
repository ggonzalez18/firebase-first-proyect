<template>
  <div class="home container mt-3">
      <form @submit.prevent='login'>
        <div class="form-group">
          <label for="exampleInputEmail1">Ingresa tu Email</label>
          <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Ingresa tu contraseña</label>
          <input v-model="password" type="password" class="form-control" >
        </div>
        <button type="submit" class="btn btn-primary">Ingresar</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data()  {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['setUser']),
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.setUser({
          email: this.email
        })
        this.$router.push('/admin')
      })
      .catch(() => {
        alert('stopppppppp!')
      })
    }
  }
  // components: {
  // }
}
</script>
