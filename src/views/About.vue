<template>
  <a-button type="primary" :loading="loading" @mouseenter="enterLoading">
    mouseenter me!
  </a-button>
  <a-button
    type="primary"
    icon="poweroff"
    :loading="iconLoading"
    @click="enterIconLoading"
  >
    延迟1s
  </a-button>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const loading = ref(false);
    const iconLoading = ref(false);
    const enterLoading = () => {
      loading.value = true;
    };
    const enterIconLoading = () => {
      iconLoading.value = { delay: 1000 };
    };
    return {
      loading,
      iconLoading,
      enterLoading,
      enterIconLoading,
    };
  },
});
</script>
