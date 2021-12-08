<template>
    <button
        v-bind="$attrs"
        v-on="$listeners"
        class="btn"
    >
        <slot />
    </button>
</template>

<script>
    export default {

    }
</script>