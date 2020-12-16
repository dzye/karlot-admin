<template>
  <div class="container">11111111</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
interface dataProps {}
export default defineComponent({
  name: 'Home',
  setup() {
    const data: dataProps = reactive({});
    return {
      data,
    };
  },
});
</script>

<style lang="less" scoped></style>
