<template>
    <aside :class="showAside ? 'open' : ''">
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

<style scoped>
    aside {
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        padding: 20px 0;
        height: 100vh;
        overflow: hidden;
        background-color: #ccc;
        z-index: 99;
        transition: all .2s linear;
        color: #000
    }

    aside.open {
        width: max-content;
        padding: 20px 50px;
    }
</style>