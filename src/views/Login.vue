<template>
  <div class="login">
    <h1>Login</h1>
    <br />
    <br />
    <br />

    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha" />
    <br />
    <div class="btn-login">
      <template v-if="loading"> Logando... </template>
      <template v-else>
                <br />

         Esqueceu a senha?   <router-link to="resetpassword">recupere ela aqui.</router-link>
        <br />
        <br />

        <button @click="login">Entrar</button> </template
      ><br /><br />

      <a
        class="
          button
          is-google is-outlined is-info is-rounded is-medium is-fullwidth
        "
        @click="loginWithGoogle"
      >
        <span class="icon">
          <i class="fab fa-google"></i>
        </span>
        <span>Entrar com o Google</span>
      </a>
    </div>
    <br />
    Você não tem conta?
    <router-link to="/registrar">crie uma agora mesmo!</router-link>
  </div>
</template>


<script>
import firebase from "firebase";
export default {
  name: "login",
  methods: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.replace("home");
        })
        .catch((err) => {
          // TODO:
          alert(err.message);
        });
    },
  },
};
</script>

<script>
import firebase from "firebase";

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
    loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.replace("home");
        })
        .catch((err) => {
          // TODO:
          alert(err.message);
        });
    },
  },
};
</script>

<style scoped>