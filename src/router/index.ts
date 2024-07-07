import { createRouter, createWebHistory } from 'vue-router'








import TestGame from '../views/Test-game.vue'
import TestGame2 from '../views/Test-game2.vue'

const routes = [
  {
    path: '/test-game',
    name: 'TestGame',
    component: TestGame
  },
  {
    path: '/test-game2',
    name: 'TestGame2',
    component: TestGame2
  },
  // 其他路由配置
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
