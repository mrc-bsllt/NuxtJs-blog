<template>
    <div>
        <slot />
        <input 
            v-if="inputType === 'text'" 
            type="text"
            :value="value"
            @input="$emit('input', $event.target.value)"
        >

        <textarea 
            v-if="inputType === 'textarea'"
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
        }
    }
</script>