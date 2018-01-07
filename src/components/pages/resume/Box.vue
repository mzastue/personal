<template>
  <div class="box" :class="{ 'shadowed': shadowed }">
    <div class="box--title headline" v-if="title">{{ title }}</div>
    <div class="box--content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ResumeBox',

    props: {
      title: String,
      shadowed: {
        type: Boolean,
        default: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/resume/colors";

  %opacity-transition {
    transition: opacity .35s ease-in-out;
  }

  .box {
    @extend %opacity-transition;
    margin: 0 0 35px 0;
    border: 2px solid $colorDark;
    box-shadow: 5px 5px rgba($third, .7);
    background: rgba(#fff, .9);

    &.shadowed {
      opacity: .4;

      &:hover {
        @extend %opacity-transition;
        opacity: 1;
      }
    }

    .box--title {
      display: block;
      padding: 5px 15px;
      background: $colorDark;
      color: $colorLight;
      font-family: 'Space mono', monospace;
      font-size: 18pt;
    }

    .box--content {
      padding: 15px;
      font-family: 'Space mono';
    }
  }
</style>