<template>
  <div class="header">
    <box
      title="Hello, I am .."
      :shadowed="false"
    >
      <div class="i-am">mateusz littwin</div>
      <div class="my-divider">- - -</div>
      <div class="who-am-i">web developer</div>
    </box>
  </div>
</template>

<script>
  import Box from './Box';

  export default {
    name: 'ResumeHeader',

    components: { Box },
  };
</script>

<style lang="scss" scoped>
  .header {
    .i-am {
      font-family: 'Space mono';
      font-size: 40pt;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
    }

    .who-am-i {
      text-align: center;
      font-size: 20pt;
    }

    .my-divider {
      text-align: center;
    }
  }
</style>