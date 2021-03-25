<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "mainlayout"
};
</script>

<style>
.main {
  padding-top: 5rem;
  height: 100vh;
  background: white;
}
</style>
