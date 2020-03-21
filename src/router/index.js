import Vue from 'vue'
import VueRouter from 'vue-router'
import tutorials from '../views/tutorials.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tutorials',
    component: tutorials
  }

]

const router = new VueRouter({
  routes
})

export default router
