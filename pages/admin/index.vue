<template>
    <div>
        <header class="flex flex-row justify-center items-center py-5">
            <UI-CustomButton type="button" @click="$router.push('/admin/createPost')">Create Post</UI-CustomButton>
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