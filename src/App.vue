<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "./layouts/Empty";
import MainLayout from "./layouts/Main";
import LoadingLayout from "./layouts/Loading";

export default {
  name: "app",
  computed: {
    layout() {
      if (!this.$store.getters.userAuth) {
        return "empty-layout";
      }

      return (this.$route.meta.layout || "loading") + "-layout";
    }
  },
  components: { EmptyLayout, MainLayout, LoadingLayout }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
