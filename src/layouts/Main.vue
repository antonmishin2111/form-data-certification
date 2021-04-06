<template>
  <div class="main">
    <router-view></router-view>
    <el-button @click="handlerOut" type="info">Выйти</el-button>
  </div>
</template>

<script>
export default {
  name: "mainlayout",
  methods: {
    handlerOut() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
.main {
  height: 100vh;
  background: white;
}
</style>
