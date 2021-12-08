<template>
    <div id="error_layout">
        <p class="uppercase">OPPPPPSSSSS!!!! Something Went Wrong, Come <a href="/" style="color: red; text-decoration: underline">Back</a></p>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/style/partials/_vars.scss';

    #error_layout {
        @apply h-screen flex flex-row justify-center items-center flex-nowrap;
        position: relative;
        background-color: $primary_bg;

        p {
            color: $secondary_color;
            font-size: 30px;
        }
    }
</style>