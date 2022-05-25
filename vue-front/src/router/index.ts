import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeComponent from '@/views/HomeComponent.vue'
import RegisterComponent from '@/views/RegisterComponent.vue'
import LoginComponent from '@/views/LoginComponent.vue'
import DashboardComponent from '@/views/DashboardComponent.vue'

const routes: Array<RouteRecordRaw> = [
  {path:'/',component:HomeComponent},
  {path:'/login',component:LoginComponent},
  {path:'/register',component:RegisterComponent},
  {path:'/dashboard',component:DashboardComponent},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
