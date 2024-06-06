import {
  createWebHistory,
  createRouter,
} from 'vue-router';
import {
  BasicLayout,
  HelloWorld,
} from '@/components';

const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: HelloWorld,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
