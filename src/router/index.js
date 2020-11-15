import Vue from 'vue'
import VueRouter from 'vue-router'
import Dasboard from '../views/dashboard.vue'
import Settings from '../views/settings.vue'
import Login from '../views/login.vue'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dasboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('./login')
  } else {
    next()
  }
})
export default router
