<template>
    <aside class="h-screen overflow-hidden" :class="showAside ? 'open' : ''">
        <Navigation-NavItems direction="column" @toggleAside="$emit('toggleAside')" />
    </aside>
</template>

<script>
export default {
    props: {
        showAside: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/partials/_vars.scss';

    aside {
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        padding: 20px 0;
        background-color: $secondary_bg;
        z-index: 99;
        transition: $transition;

        &.open {
            width: 50%;
            padding: 20px 50px;
        }
    }
</style>