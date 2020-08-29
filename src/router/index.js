import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import firebase from 'firebase'
import Beer from '@/components/Beer.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      login: true
    }
    },
  {
    path: '/beers/:id',
    name: 'Beer',
    component: Beer,
    meta: {
      login: true
    }
  },
  {
    path: '/*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => { //funcion que se ejecutara cada vez que haya un usuario(autentificacion)
  let user = firebase.auth().currentUser
  let authRequired = to.matched.some(route => route.meta.login) //si es que la ruta requiere o no autentificacion (meta.login = true)
  if (!user && authRequired) {
    next('/')
  } else {
    next()
  }
})

export default router
