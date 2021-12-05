<template>
    <div id="home">
        <PageTitle message="Featured Posts!"/>

        <main>
            <Posts-PostList :posts="getLoadedPosts" />
        </main>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        layout: 'main',
        computed: {
            ...mapGetters(
                'posts', ['getLoadedPosts']
            )
        }
    }
</script>

<style scoped>
    header {
        border-bottom: 1px solid #B88B4A;
    }

    h1 {
        text-align: center;
    }
</style>