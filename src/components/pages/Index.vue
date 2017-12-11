<template>
    <v-container>
        <v-flex hidden-sm-and-down mt-5></v-flex>
        <v-layout
            row wrap
            align-center
            card-container
            grey lighten-4
            elevation-1
        >
            <v-flex
                xs12 md6
            >
                <index-photo></index-photo>
            </v-flex>
            <v-flex
                xs12 md6
                text-xs-center
            >
                <index-description></index-description>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import IndexPhoto from './index/Photo';
    import IndexDescription from './index/Description';

    export default {
      name: 'PageIndex',

      components: { IndexPhoto, IndexDescription },
    };
</script>

<style lang="scss" scoped>
</style>