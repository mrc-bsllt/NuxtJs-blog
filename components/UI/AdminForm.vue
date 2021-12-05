<template>
    <form @submit.prevent="savePost">
        <UI-CustomInput v-model="currentPost.author">Author</UI-CustomInput>
        <UI-CustomInput v-model="currentPost.title">Title</UI-CustomInput>
        <UI-CustomInput v-model="currentPost.image">Image</UI-CustomInput>
        <UI-CustomInput inputType="textarea" v-model="currentPost.content">Content</UI-CustomInput>

        <UI-CustomButton  type="submit" :label="mainBtnLabel" />
        <UI-CustomButton  type="button" label="Back" @click="$router.push('/admin')" />
    </form>
</template>

<script>
    export default {
        props: {
            mainBtnLabel: {
                type: String,
                required: true
            },
            post: {
                type: Object,
                required: false
            }
        },
        data() {
            return {
                currentPost: this.post ? { ...this.post } : {
                    author: '',
                    title: '',
                    content: '',
                    image: ''
                }
            }
        },
        methods: {
            savePost() {
                const slug = this.titleToSlug(this.currentPost.title);
                const postToSend = !this.$route.path.includes('edit') 
                    ? { ...this.currentPost, slug: slug, created_at: new Date(),  updated_at: new Date() } 
                    : { ...this.currentPost, slug: slug, updated_at: new Date() }

                this.$emit('onSubmit', postToSend);
            },
            titleToSlug(str) {
                return str.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
            }
        }
    }
</script>