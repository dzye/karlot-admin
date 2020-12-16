<template>
  <div class="container">44444444</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
interface dataProps {}
export default defineComponent({
  name: 'Edit',
  setup() {
    const data: dataProps = reactive({});
    return {
      data,
    };
  },
});
</script>

<style lang="less" scoped></style>
