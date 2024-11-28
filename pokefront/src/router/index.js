import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TuiView from '../views/TuiView.vue'
import GuiView from '../views/GuiView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tui',
      name: 'tui',
      component: TuiView,
    },
    {
      path: '/gui',
      name: 'gui',
      component: GuiView,
    },
  ],
})

export default router
