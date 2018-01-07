<template>
  <div class="info-line">
    <span>{{ date }}</span>
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
    <span>{{ position }}</span>
    <div class="info-line--description" v-if="description">
      {{ description }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'BoxInfoLine',

    props: {
      title: String,
      subtitle: String,
      date: String,
      position: String,
      description: String,
      tags: Array,
      tagsTitle: String,
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../../../assets/styles/resume/colors";
  .info-line {
    margin: 5px 0;
  }
</style>