<template>
    <AuthForm @onSubmit="sendData" />
</template>

<script>
    export default {
        layout: 'main',
        methods: {
            sendData(data) {
                this.$store.dispatch('auth/loginUser', data);
            }
        }
    }
</script>