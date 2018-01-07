<template>
  <div class="particles-layer">
    <vue-particles
      color="#dedede"
      linesColor="#dedede"
      :click-effect="false"
    ></vue-particles>
  </div>
</template>

<script>
  export default {
    name: 'Particles',
  };
</script>

<style lang="scss">
  .particles-layer {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
