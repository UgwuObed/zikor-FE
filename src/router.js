import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './components/LandingPage.vue';
import SignUpForm from '@/components/SignUpForm.vue';
import HomePage from '@/components/HomePage.vue';
import LoginPage from '@/components/LoginPage.vue';
import AccountCreated from '@/components/AccountCreated.vue';
import AddProduct from '@/components/AddProduct.vue';
import ProductUploaded from '@/components/ProductUploaded.vue';


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
    },

    {
      path: '/account',
      name: 'AccountCreated',
      component: AccountCreated
    },

    {
      path: '/add-product',
      name: 'AddProduct',
      component: AddProduct
    },

      {
      path: '/product-uploaded',
      name: 'ProductUploaded',
      component: ProductUploaded
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
