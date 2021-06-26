<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text" placeholder="Email">
        <br>
        <input type="password" placeholder="Senha">
        <br>
        <div class="btn-login">
            <button @click="login">Login</button>
        </div>
        <p>
            Você não tem conta?
            <router-link to="/register">crie uma conta</router-link>
        </p>
    </div>
</template>


<script>
export default {
    name: "login",
    data() {
        return {};
    },
    methods: {
        login: function() {
            this.$router.replace("home");
        }
    }
};
</script>

<style scoped>