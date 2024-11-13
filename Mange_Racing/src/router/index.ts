import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateGhost from '../views/CreateGhost.vue'
import CreteSpeedester from '@/views/CreteSpeedester.vue'
import CreteCity from '@/views/CreteCity.vue'
import CreateCross from '@/views/CreateCross.vue'
import CreateTraveler from '@/views/CreateTraveler.vue'
import Login from '@/views/Login.vue'
import Admin from '@/views/Admin.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/creteGhost',
      name: 'createGhost',
      component: CreateGhost
    },
    {
      path: '/creteSpeedester',
      name: 'createSpeedester',
      component: CreteSpeedester
    },
    {
      path: '/creteCity',
      name: 'createCity',
      component: CreteCity
    },
    {
      path: '/creteCross',
      name: 'createCross',
      component: CreateCross
    },
    {
      path: '/creteTraveler',
      name: 'createTraveler',
      component: CreateTraveler
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})

export default router
