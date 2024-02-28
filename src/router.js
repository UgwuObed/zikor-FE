import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './components/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  // Other routes if needed
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
