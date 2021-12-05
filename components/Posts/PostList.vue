<template>
    <div class="featured_posts flex flex-row justify-start flex-wrap py-10">
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

</style>