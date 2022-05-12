import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '../views/BoardView.vue'
import MainTools from '../components/sideBar/MainTools.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'board',
      components: {
        default: BoardView,
        sideBarTools: MainTools,
      }
    },
    {
      path: '/project',
      name: 'project',
      components: {
        default: import('@/views/ProjectManagerView.vue'),
        sideBarTools: import('@/components/sideBar/ProjectTools.vue'),
      }
    },
    {
      path: '/budget',
      name: 'budget',
      components: {
        default: import('@/views/BudgetManagerView.vue'),
        sideBarTools: import('@/components/sideBar/BudgetTools.vue')
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: {
        default: import('@/views/ProfileView.vue'),
        sideBarTools: import('@/components/sideBar/ProfileTools.vue')
      }
    },
  ]
})

export default router
