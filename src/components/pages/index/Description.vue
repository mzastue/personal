<template>
    <v-flex text-xs-left pl-4>
        <p class="display-4  my-text">Hello,</p>
        <p class="display-1  my-text">my name is Mateusz.</p>
        <p class="display-1  my-text">I am web software developer.</p>

        <index-social-links></index-social-links>
    </v-flex>
</template>

<script>
    import IndexSocialLinks from './SocialLinks';

    export default {
      name: 'IndexDescription',

      components: { IndexSocialLinks },
    };
</script>
