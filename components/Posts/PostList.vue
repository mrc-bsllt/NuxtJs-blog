<template>
    <div class="featured_posts">
        <Posts-PostCard 
            v-for="post in posts"
            :key="post.id"
            :post="post"
        />
    </div>
</template>

<script>
export default {
    props: {
        posts: Array,
        required: true
    }
}
</script>

<style scoped>
    .featured_posts {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px 0;
    }
</style>