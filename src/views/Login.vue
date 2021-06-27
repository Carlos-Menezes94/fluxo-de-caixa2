<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha" />
    <br />
    <div class="btn-login">
      <template v-if="loading"> Logando... </template>
      <template v-else>
        <button @click="login">Login</button>
      </template>
    </div>
    <p>
      Você não tem conta?
      <router-link to="/registrar">crie uma conta</router-link>
    </p>
  </div>
</template>


<script>
import firebase from "firebase/app";

export default {
  name: "login",
  data() {
    return {
      email: "eeee@email.com",
      senha: "123456",
    };
  },
  methods: {
    login: function () {
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.senha)
        .then(
          (user) => {
            console.log(user);
            this.$router.replace("home");
          },
          (err) => {
            alert("Aconteceu algo inesperado. " + err.message);

            this.loading = false;
          }
        );
    },
  },
};
</script>

<style scoped>