<template>
  <v-app
      class="grey lighten-1"
  >
      <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
    @import "../src/assets/styles/index.scss";
</style>