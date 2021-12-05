<template>
    <div class="page_message p-8">
        <h1 class="text-center uppercase">{{ message }}</h1>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/style/partials/_vars.scss';

    .page_message {
        border-bottom: 1px solid $border_color;

        h1 {
            color: $secondary_color;
        }
    }
</style>