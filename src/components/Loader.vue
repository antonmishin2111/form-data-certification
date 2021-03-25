<template>
  <div
    v-loading="value"
    element-loading-text="Загружается..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%"
  ></div>
</template>

<script>
export default {
  props: ["value"],
  mounted() {
    console.log(this.value);
  }
};
</script>

<style></style>
