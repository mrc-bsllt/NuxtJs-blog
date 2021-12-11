<template>
    <div v-if="post.slug" class="postCard__wrapper flex flex-col justify-between flex-nowrap p-5 w-full lg:w-4/12 xl:w-3/12">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug, post }, query: { id: post.id } }" class="post_link__wrapper">
            <div class="post__wrapper">
                <figure class="post_image">
                    <img 
                        :src="post.image != '' ? post.image : require('@/assets/images/placeholder.png')" 
                        class="w-full h-full object-cover object-center"
                        :alt="post.slug"
                    >
                </figure>
             
                <div class="post_meta py-5">
                    <small class="mb-1">{{ post.tags.join(', ') }}</small>

                    <h3>{{ post.title }} ({{ post.author }})</h3>

                    <section class="preview py-3">
                        <p>{{ toSubstring() }}</p>
                    </section>

                    <p>Created: {{ post.created_at | getDate }}</p>
                    <p>Last Update: {{ post.updated_at | getDate }}</p>
                </div>
            </div>
        </nuxt-link>

        <div v-if="this.$route.path.includes('admin')" class="buttons__wrapper flex flex-row justify-center flex-nowrap">
            <nuxt-link 
                :to="{ name: 'admin-edit-slug', params: { slug: post.slug, post }, query: { id: post.id } }" 
                class="btn"
            >
                Edit
            </nuxt-link>

            <UI-CustomButton  
                type="button" 
                class="btn-delete"
                @click="deletePost(post).then(res => $router.push('/'))"
            >
                Delete
            </UI-CustomButton>
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

<style lang="scss" scoped>
    @import '@/assets/style/partials/_vars.scss';
    
    .post_image {
        height: 400px;
    }
    
    .post_meta {
        h3, p {
            color: $secondary_color;
        }

        small {
            color: $border_color;
        }
    }
</style>