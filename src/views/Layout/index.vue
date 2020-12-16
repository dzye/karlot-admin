<template>
  <a-layout class="main">
    <a-layout-sider breakpoint="lg" collapsed-width="0">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        @select="menuItenSelect"
      >
        <a-menu-item v-for="item in menuList" :key="item.name">
          <icon-font :type="item.meta.icon" />
          <span class="nav-text">{{ item.meta.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';
import { routers } from '@/router/router';
import {
  RouteRecordRaw,
  useRouter,
  useRoute,
  Router,
  RouteLocationNormalizedLoaded,
} from 'vue-router';
const IconFont: any = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2273427_6vzp1hbgtm8.js',
});

export default defineComponent({
  name: 'Layout',
  components: {
    IconFont,
  },
  setup() {
    const router: Router = useRouter();
    const route: RouteLocationNormalizedLoaded = useRoute();
    let selectedKeys = ref<Array<string | symbol | null | undefined>>([
      route.name,
    ]);
    const menuList = reactive<Array<RouteRecordRaw>>(routers);
    const menuItenSelect = (val: any) => {
      router.push({ name: val.key });
    };
    return {
      selectedKeys,
      menuItenSelect,
      menuList,
    };
  },
});
</script>

<style lang="less" scoped>
.main {
  height: 100vh;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
