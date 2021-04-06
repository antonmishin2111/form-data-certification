<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <p>{{ isAuth }}</p>
    <p>{{ user.name }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>
