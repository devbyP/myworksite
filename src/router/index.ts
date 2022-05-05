import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '../views/BoardView.vue'
import MainTools from '../components/sideBar/MainTools.vue'
import ProjectTools from '../components/sideBar/ProjectTools.vue'

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
        default: BoardView,
        sideBarTools: ProjectTools,
      }
    }
  ]
})

export default router
