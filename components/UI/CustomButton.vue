<template>
    <button
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot>{{ label }}</slot>
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>