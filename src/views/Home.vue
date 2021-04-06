<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <p>{{ isAuth }}</p>
    <p>{{ userName }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  computed: {
    isAuth() {
      return this.$store.getters.userAuth;
    },
    userName() {
      return this.$store.getters.userName;
    }
  }
};
</script>
