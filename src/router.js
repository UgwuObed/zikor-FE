import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './components/LandingPage.vue';
import SignUpForm from '@/components/SignUpForm.vue';
import SetupBusinessPage from '@/components/SetupBusinessPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
      {
      path: '/sign-up',
      name: 'SignUpForm',
      component: SignUpForm
    },

    {
      path: '/setup-business',
      name: 'SetupBusinessPage',
      component: SetupBusinessPage
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
