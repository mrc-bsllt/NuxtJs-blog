<template>
    <div id="main_layout">
        <Header @toggleAside="showAside = !showAside" />
        <AsideNavigation :showAside="showAside" @toggleAside="showAside = !showAside" />

        <main>
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

<style scoped>
    #main_layout {
        position: relative;
        height: 100vh;
        max-height: 100vh;
        background-color: #303030;
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }

    main {
        padding: 20px;
    }
</style>