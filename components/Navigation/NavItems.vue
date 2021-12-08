<template>
    <nav 
        id="main_nav" 
        class="h-full" 
        :class="direction === 'row' ? 'flex_row' : 'flex_col'"
    >
        <ul 
            class="nav_items h-full flex items-center flex-nowrap" 
            @click="$emit('toggleAside')"
        >
            <li class="nav_item">
                <nuxt-link to="/">Blog</nuxt-link>
            </li>
            <li class="nav_item">
                <nuxt-link to="/about">About</nuxt-link>
            </li>
            <template v-if="!getToken">
                <li class="nav_item">
                    <nuxt-link to="/auth/login">Login</nuxt-link>
                </li>
                <li class="nav_item">
                    <nuxt-link to="/auth/register">Register</nuxt-link>
                </li>
            </template>
            <li v-else class="nav_item">
                <nuxt-link to="/admin">Admin</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        props: {
            direction: {
                type: String,
                required: false,
                default: 'row'
            }
        },
        computed: {
            ...mapGetters(
                'auth', [ 'getToken' ]
            )
        }
    }
</script>

<style lang="scss" scoped>
    #main_nav {
        &.flex_row {
            .nav_items {
                flex-direction: row;
                justify-content: flex-end;
            }
        }

        &.flex_col {
            .nav_items {
                flex-direction: column;
                justify-content: flex-start;
            }
        }
    }

    .nav_items {
        .nav_item {
            padding: 10px;
        }
    }
</style>