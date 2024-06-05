import {
  createWebHistory,
  createRouter,
} from 'vue-router';
import { BasicLayout } from '@/components';

const routes = [
  {
    path: '/',
    component: BasicLayout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
