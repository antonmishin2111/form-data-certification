<template>
  <div
    v-loading="loading"
    element-loading-text="Загружается..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%"
  >
    <!-- <loader v-if="loading" :value="loading" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  }
};
</script>
