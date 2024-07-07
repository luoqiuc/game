import { createRouter, createWebHistory } from 'vue-router'








import TestGame from '../views/Test-game.vue'

const routes = [
  {
    path: '/test-game',
    name: 'TestGame',
    component: TestGame
  },
  // 其他路由配置
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
