<template>
    <UI-AdminForm mainBtnLabel="Edit" :post="getPostByUniqueString(filterString)" @onSubmit="sendUpdatePost" />
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        layout: 'main',
        middleware: 'isAuth',
        asyncData({ route }) {
            return {
                filterString: route.params.slug + route.query.id
            }
        },
        methods: {
            sendUpdatePost(data) {
                this.$store.dispatch('posts/updatePost', { data }).then(() => {
                    this.$router.push('/');
                })
            }
        },
        computed: {
            ...mapGetters(
                'posts', [ 'getPostByUniqueString' ]
            )
        }
    }
</script>