<template>
  <el-container class="empty-layout">
    <router-view />
  </el-container>
</template>

<script>
export default {
  name: "emptylayout"
};
</script>

<style>
.empty-layout {
  height: 100vh;
  background: #9c9898;
  align-items: center;
}
</style>
