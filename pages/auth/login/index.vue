<template>
    <div class="form__section">
        <AuthForm @onSubmit="sendData" />
    </div>
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