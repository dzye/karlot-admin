<template>
  <div class="container">
    555555555
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
interface dataProps {}
export default defineComponent({
  name: 'Setting',
  setup() {
    const data: dataProps = reactive({});
    return {
      data,
    };
  },
});
</script>

<style lang="less" scoped></style>
