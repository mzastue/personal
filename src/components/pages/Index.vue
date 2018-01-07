<template>
  <div id="page-index" class="grey lighten-1">
    <v-container style="z-index: 2;">
      <v-layout
        row wrap
        align-center
        card-container
        grey lighten-4
        elevation-0
      >
        <v-flex
          xs12 md6
        >
          <index-photo></index-photo>
        </v-flex>
        <v-flex
          xs12 md6
          text-xs-center
        >
          <index-description></index-description>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import IndexPhoto from './index/Photo';
  import IndexDescription from './index/Description';

  import Particles from '../Particles';

  export default {
    name: 'PageIndex',

    components: { IndexPhoto, IndexDescription, Particles },
  };
</script>

<style lang="scss" scoped>
  #page-index {
    height: 100%;
    display: flex;
    background: #F6EDD3;
  }
</style>