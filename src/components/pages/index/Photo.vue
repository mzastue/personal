<template>
    <v-flex
        photo-box
    >
        <img
            src="../../../assets/images/photo.jpg"
            alt="avatar"
        >
    </v-flex>
</template>

<script>
    export default {
      name: 'IndexPhoto',
    };
</script>

<style lang="scss" scoped>
    .photo-box {
        line-height: 0;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
