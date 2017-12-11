<template>
    <ul>
        <li
            v-for="social in socials"
        ><a
            :href="social.href"
            target="_blank"
            :class="social.name"
        ><v-icon
            medium>{{ social.icon }}</v-icon>
        </a>
        </li>
    </ul>
</template>

<script>
    import socialsData from '../../../data/socials.json';

    export default {
      name: 'IndexSocialLinks',

      data() {
        return {
          socials: socialsData,
        };
      },
    };
</script>

<style lang="scss" scoped>
    @mixin hover($color) {
        i {
            &:hover {
                color: $color;
            }
        }
    }

    ul {
        list-style: none;
        padding: 40px 20px 0 0;

        li {
            vertical-align: top;
            display: inline;
            padding: 0 20px;

            &:first-child {
                padding-left: 0;
            }

            a {
                color: transparent;
                &.facebook { @include hover(#3B5998) }
                &.spotify { @include hover(#00e461) }
                &.instagram { @include hover(#bc2a8d) }
                &.linkedin { @include hover(#007bb6) }
            }
        }
    }
</style>
