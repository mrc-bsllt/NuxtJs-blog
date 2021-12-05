<template>
    <div 
        id="hamburger_menu" 
        class="h-full flex flex-row justify-center items-center flex-nowrap md:hidden" 
        @click="$emit('toggleAside')"
    >
        <i class="fas fa-bars"></i>
    </div>
</template>

<style lang="scss" scoped>
    #hamburger_menu {
        width: 80px;

        i {
            font-size: 30px;
        }
    }
</style>