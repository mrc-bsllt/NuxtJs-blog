<template>
    <form @submit.prevent="onSubmit">
        <UI-CustomInput v-if="$route.name === 'auth-register'" type="text" v-model="userData.name">Nome</UI-CustomInput>
        <UI-CustomInput type="email" v-model="userData.email">E-mail</UI-CustomInput>
        <UI-CustomInput type="password" v-model="userData.password">Password</UI-CustomInput>

        <div class="buttons__wrapper">
            <UI-CustomButton type="submit">{{ submitLabel }}</UI-CustomButton>
            <UI-CustomButton type="button" @click="$router.push('/')">Back</UI-CustomButton>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    name: '',
                    email: '',
                    password: ''
                },
                submitLabel: this.$route.name === 'auth-login' ? 'Login' : 'Register'
            }
        },
        methods: {
            onSubmit() {
                this.$emit('onSubmit', this.userData);
            }
        }
    }
</script>