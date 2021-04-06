<template>
  <div
    class="main"
    v-loading="loading"
    element-loading-text="Загружается..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%"
  >
    <router-view></router-view>
    <el-button @click="handlerOut" type="info">Выйти</el-button>
  </div>
</template>

<script>
export default {
  name: "mainlayout",
  computed: {
    loading() {
      return this.$store.getters.isProcess;
    }
  },
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
