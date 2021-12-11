<template>
    <div class="tag__wrapper p-2">
        <div class="tag flex flex-row justify-between items-center p-2">
            <span>{{ label }}</span>
            <i class="fas fa-times ml-2 cursor-pointer self-start" v-on="$listeners"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                required: true
            }
        },
        inheritLIsteners: false
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/style/partials/vars.scss';

    .tag__wrapper {
        min-width: calc(100% / 8);
        height: 50px;

        .tag {
            width: 100%;
            height: 100%;
            background-color: $secondary_bg;
            border-radius: 5px;
        }
    }
</style>