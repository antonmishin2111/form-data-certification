<template>
  <el-container class="about">
    <loader v-if="loading" :value="loading" />
    <h1 v-else>This is an about page</h1>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    };
  }
};
</script>
<style scoped>
.about {
  height: 100vh;
}
</style>
