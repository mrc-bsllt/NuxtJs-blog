<template>
    <div class="create-form">
        <UI-AdminForm @onSubmit="savePost" mainBtnLabel="Save" />
    </div>
</template>

<script>
    export default {
        layout: 'main',
        middleware: 'isAuth',
        methods: {
            savePost(data) {
                this.$store.dispatch('posts/addPost', data).then(() => this.$router.push('/'))
            }
        }
    }
</script>