import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { routers } from './router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'login',
    meta: {
      name: '主页',
      icon: 'icon-zhengli',
    },
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: '登陆',
      icon: 'icon-dili',
    },
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/index',
    name: 'Layout',
    meta: {
      name: '主页',
      icon: 'icon-dili',
    },
    component: () => import('@/views/Layout/index.vue'),
    children: routers,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
