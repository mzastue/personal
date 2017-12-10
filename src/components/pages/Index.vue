<template>
    <v-container>
        <v-layout
            row
            align-center
            card-container
            grey lighten-4
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
    .card-container {
        background-color: rgba(255, 255, 255, .9);
    }
</style>