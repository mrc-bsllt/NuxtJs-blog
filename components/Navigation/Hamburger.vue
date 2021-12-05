<template>
    <div id="hamburger_menu" @click="$emit('toggleAside')">
        <i class="fas fa-bars"></i>
    </div>
</template>

<style scoped>
    #hamburger_menu {
        display: none;
        width: 80px;
        height: 100%;
    }

    #hamburger_menu > i {
        font-size: 30px;
    }

    @media only screen and (max-width: 768px) {
        #hamburger_menu {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
        }
    }
</style>