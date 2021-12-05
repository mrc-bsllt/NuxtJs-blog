<template>
    <div v-if="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug, post }, query: { id: post.id } }" class="post_link__wrapper">
            <div class="post__wrapper">
                <figure class="post_image">
                    <img :src="post.image != '' ? post.image : 'https://www.frosinonecalcio.com/wp-content/uploads/2021/09/default-placeholder.png'" :alt="post.slug">
                </figure>

                <div class="post_meta">
                    <h3>{{ post.title }}</h3>

                    <section class="preview">
                        <p>{{ toSubstring() }}</p>
                    </section>
                </div>
            </div>
        </nuxt-link>

        <div v-if="this.$route.path.includes('admin')">
            <nuxt-link :to="{ name: 'admin-edit-slug', params: { slug: post.slug, post }, query: { id: post.id } }" class="btn">Edit</nuxt-link>
            <button 
                class="btn" 
                @click="deletePost(post).then(res => $router.push('/'))"
            >
                Delete
            </button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        },
        methods: {
            toSubstring() {
                return this.post.content.substring(0, 250) + '...';
            },
            ...mapActions(
                'posts', [ 'deletePost' ]
            )
        }
    }
</script>

<style scoped>
    .post_link__wrapper {
        margin: 10px;
    }
    
    .post__wrapper {
        width: 500px;
        height: 300px;
        background-color: transparent;
        border: 1px solid #B88B4A;
        transition: all .3s linear;
    }

    .post__wrapper:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }

    .post_image {
        width: 100%;
        height: 50%;
    }

    .post_image > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .post_meta {
        padding: 10px;
    }

    .preview {
        padding: 10px 0;
    }
</style>