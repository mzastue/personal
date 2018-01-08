<template>
  <v-expansion-panel class="skills" expand>
    <v-expansion-panel-content
            class="skill"
            v-for="skill in skills"
            key="skill"
    >
      <div slot="header">{{ skill.group }}</div>
      <v-card>
        <v-card-text class="skill--content">
          <tags
                  :tags="skill.tags"
          ></tags>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  import Tags from './Tags';

  export default {
    name: 'ResumeSkills',

    props: {
      skills: Array,
    },

    components: { Tags },
  };
</script>

<style lang="scss">
  @import "../../../assets/styles/resume/colors";

  .skills {
    .skill {
      // Override default material style
      .expansion-panel__header {
        .header__icon {
          .icon {
            color: $third;
          }
        }
      }

      .skill--content {
        background: $colorLight;
      }
    }
  }
</style>
