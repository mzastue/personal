<template>
    <v-flex my-text text-xs-left pl-4>
        <p class="display-4">Hello,</p>
        <p class="display-1">my name is Mateusz.</p>
        <p class="display-1">I am web software developer.</p>
        <!--<p class="headline">You can catch me there</p>-->

        <!--<index-social-links></index-social-links>-->
    </v-flex>
</template>

<script>
    import IndexSocialLinks from './SocialLinks';

    export default {
      name: 'IndexDescription',

      components: { IndexSocialLinks },
    };
</script>
