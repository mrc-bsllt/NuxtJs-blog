<template>
    <div class="single_post" v-if="selectedPost">
        <h1>{{ selectedPost.title }}</h1>
        <p>{{ selectedPost.content }}</p>
        <p>{{ selectedPost.author }}</p>
        <p>{{ selectedPost.created_at | getDate }}</p>
    </div>
</template>

<script>
    export default {
        layout: 'main',
        asyncData({ route, store }) {
            const stringFilter = route.params.slug + route.query.id,
                selectedPost = store.getters['posts/getPostByUniqueString'](stringFilter);
            return {
                selectedPost
            }
        }
    }
</script>

<style lang="scss" scoped>
    .single_post {

        h1 {
            color: red;
        }
    }
</style>