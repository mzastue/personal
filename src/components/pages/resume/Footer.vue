<template>
  <div class="resume--footer">
    <box>
      <div class="refs">Font: <a href="//fonts.google.com/?category=Display,Monospace&query=space" target="_blank">Space Mono</a> &#x7C; development with <a href="//vuejs.org" target="_blank">VueJs</a> and <a href="//vuetifyjs.com" target="_blank">Vuetify</a></div>
      <div>{{ currentYear }} @ Made with <3.</div>
    </box>
  </div>
</template>

<script>
  import Box from './Box';

  export default {
    name: 'ResumeFooter',

    components: { Box },

    computed: {
      currentYear() {
        return new Date().getFullYear();
      },
    },
  };
</script>

<style lang="scss">
  .resume--footer {
    text-align: center;
  }
</style>
