import { RouteRecordRaw } from 'vue-router';
export const routers: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'HOME',
    meta: {
      name: '主页',
      icon: 'icon-home-fill',
    },
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/edit',
    name: 'EDIT',
    meta: {
      name: '发布文章',
      icon: 'icon-edit-fill',
    },
    component: () => import('@/views/Edit/index.vue'),
  },
  {
    path: '/user',
    name: 'USER',
    meta: {
      name: '关于我',
      icon: 'icon-user',
    },
    component: () => import('@/views/User/index.vue'),
  },
  {
    path: '/comment',
    name: 'COMMENT',
    meta: {
      name: '评论列表',
      icon: 'icon-detail-fill',
    },
    component: () => import('@/views/Comment/index.vue'),
  },
  {
    path: '/setting',
    name: 'SETTING',
    meta: {
      name: '设置',
      icon: 'icon-setting-fill',
    },
    component: () => import('@/views/Setting/index.vue'),
  },
];
