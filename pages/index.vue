<template>
    <div id="home">
        <header>
            <h1>Featured Posts!</h1>
        </header>

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