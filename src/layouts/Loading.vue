<template>
  <div>
    <loader v-if="loading" :value="loading" />
  </div>
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
