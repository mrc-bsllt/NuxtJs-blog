<template>
    <div id="main_layout">
        <Header @toggleAside="showAside = !showAside" />
        <AsideNavigation :showAside="showAside" @toggleAside="showAside = !showAside" />

        <main class="relative">
            <Nuxt />
        </main>
        
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            showAside: false
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/partials/_vars.scss';

    #main_layout {
        position: relative;
        background-color: $primary_bg;
        color: $secondary_color;

        main {
            min-height: calc(100vh - #{$headerHeight} - #{$footerHeight});
        }
    }
</style>