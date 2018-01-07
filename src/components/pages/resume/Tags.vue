<template>
  <div class="tags" v-if="tags">
    <p class="tags--title">{{ tagsTitle }}</p>
    <ul
      class="tags--list"
      v-for="tag in tags"
      :key="tag"
    >
      <li class="tags--tag">{{ tag }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Tags',

    props: {
      tagsTitle: String,
      tags: Array,
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/resume/colors";
  .tags {
    margin: 10px 0 0 0;

    .tags--title {
      margin-bottom: 5px;
    }

    .tags--list {
      list-style: none;
      display: inline-block;

      .tags--tag {
        display: inline-block;
        margin: 0 5px 5px 0;
        padding: 0px 5px;
        border: 1px solid $colorDark;
        border-radius: 2px;
        color: $colorDark;

        &:hover {
          background: $colorDark;
          color: $colorLight;
          transition: background-color .25s ease-out, color .25s ease-out;
        }
      }
    }
  }
</style>