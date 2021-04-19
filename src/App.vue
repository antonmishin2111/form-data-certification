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
      return (this.$route.meta.layout || "loading") + "-layout";
    }
  },
  components: { EmptyLayout, MainLayout, LoadingLayout }
};
</script>

<style></style>
