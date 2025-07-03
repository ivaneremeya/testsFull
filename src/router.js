import { createRouter, createWebHistory } from 'vue-router'
import BookingForm from './components/BookingForm.vue'
import BookingConfirm from './components/BookingConfirm.vue'

const routes = [
  { path: '/', component: BookingForm },
  { path: '/confirm', component: BookingConfirm }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 