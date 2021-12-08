<template>
    <div>
        <slot />
        <input 
            v-if="inputType === 'text'" 
            v-bind="$attrs"
            :value="value"
            @input="$emit('input', $event.target.value)"
        >

        <textarea 
            v-else
            :value="value"
            @input="$emit('input', $event.target.value)"
        ></textarea>
    </div>
</template>

<script>
    export default {
        props: {
            inputType: {
                type: String,
                required: false,
                default: 'text'
            },
            value: {
                type: String,
                required: false,
                default: ''
            }
        },
        inheritAttrs: false
    }
</script>