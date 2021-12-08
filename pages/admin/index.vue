<template>
    <div>
        <header class="flex flex-row justify-center items-center flex-wrap py-5">
            <PageTitle class="w-full" :message="name" />
            <UI-CustomButton type="button" class="mt-5" @click="$router.push('/admin/createPost')">Create Post</UI-CustomButton>
        </header>

        <Posts-PostList :posts="getLoadedPosts" />
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
    import { mapGetters } from 'vuex';

    export default {
        layout: 'main',
        middleware: 'isAuth',
        asyncData({ req }) {
            let userName = '';
            req ? userName = req.headers.cookie.split(';').find(el => el.includes('userName=')).split('=')[1] : userName = Cookies.get('userName');

            return {
                name: 'Ciao ' + userName + '!'
            }
        },
        computed: {
            ...mapGetters(
                'posts', [ 'getLoadedPosts' ]
            )
        }
    }
</script>