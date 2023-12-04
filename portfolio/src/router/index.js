import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GameDevView from '../views/GameDevView.vue'
import WebDevView from '../views/WebDevView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/gamedev',
    name: 'gamedev',
    component: GameDevView
  },  {
    path: '/webdev',
    name: 'webdev',
    component: WebDevView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
