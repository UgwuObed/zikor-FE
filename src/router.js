import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './components/LandingPage.vue';
import SignUpForm from '@/components/SignUpForm.vue';
import HomePage from '@/components/HomePage.vue';
import LoginPage from '@/components/LoginPage.vue';

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
      path: '/home',
      name: 'HomePage',
      component: HomePage,
      meta: { requiresAuth: true }
    },

    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/sign-up');
  } else {
    next();
  }
});

export default router
