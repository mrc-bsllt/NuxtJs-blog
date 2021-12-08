<template>
    <div class="input_group flex flex-col justify-start items-start flex-nowrap my-3">
        <label><slot /></label>
        <input 
            v-if="inputType === 'text'" 
            v-bind="$attrs"
            :value="value"
            class="p-3"
            @input="$emit('input', $event.target.value)"
        >

        <textarea 
            v-else
            :value="value"
            class="w-full resize-none"
            rows="10"
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