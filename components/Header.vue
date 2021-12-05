<template>
    <header id="header">
        <div class="header_left">
            <Navigation-Hamburger class="hamburger" @toggleAside="$emit('toggleAside')" />
            <Logo />
        </div>
        <div class="header_right">
            <Navigation-NavItems />
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @import '@/assets/style/partials/_vars.scss';

    #header {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: nowrap;
        width: 100%;
        height: $headerHeight;
        padding: 10px 15px;
        background-color: #ccc;
        color: #000;
    }

    .header_left {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        width: 20%;
    }

    .header_right {
        width: 80%;
    }

   @media only screen and (max-width: 768px) {
        .header_left {
            width: 100%;
        }

        .header_right {
            display: none;
        }
    }
</style>