<template>
    <nav id="main_nav" :class="direction === 'row' ? 'flex_row' : 'flex_col'">
        <ul class="nav_items" @click="$emit('toggleAside')">
            <li class="nav_item">
                <nuxt-link to="/posts">Blog</nuxt-link>
            </li>
            <li class="nav_item">
                <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li class="nav_item">
                <nuxt-link to="/admin">Admin</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        direction: {
            type: String,
            required: false,
            default: 'row'
        }
    }
}
</script>

<style scoped>
    #main_nav {
        height: 100%;
    }

    #main_nav.flex_row > .nav_items {
        flex-direction: row;
        justify-content: flex-end;
    }

    #main_nav.flex_col > .nav_items {
        flex-direction: column;
        justify-content: flex-start;
    }

    .nav_items {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        height: 100%;
    }

    .nav_items > .nav_item {
        padding: 10px;
        @apply hover:bg-red-700;
    }

    .nuxt-link-exact-active {
        font-weight: bold;
        text-decoration: underline;
    }
</style>