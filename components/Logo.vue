<template>
    <nuxt-link to='/' class="logo">
        <img src="@/assets/images/logo.png" alt="logo">
    </nuxt-link>
</template>

<style scoped>
    .logo {
        display: inline-block;
        width: 80px;
        height: 100%;
    }

    .logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
</style>