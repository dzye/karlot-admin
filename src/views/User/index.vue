<template>
  <div class="container">333333333</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
interface dataProps {}
export default defineComponent({
  name: 'User',
  setup() {
    const data: dataProps = reactive({});
    return {
      data,
    };
  },
});
</script>

<style lang="less" scoped></style>
