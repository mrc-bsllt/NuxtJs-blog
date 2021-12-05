<template>
    <div>
        <header>
            <nuxt-link to="/admin/createPost" class="btn">Create Post</nuxt-link>
        </header>

        <Posts-PostList :posts="getLoadedPosts" />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        layout: 'main',
        computed: {
            ...mapGetters(
                'posts', [ 'getLoadedPosts' ]
            )
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>