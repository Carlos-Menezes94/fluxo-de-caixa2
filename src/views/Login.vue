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

        Esqueceu a senha?
        <router-link to="resetpassword">recupere ela aqui.</router-link>
        <br />
        <br />

        <button @click="login">Entrar</button> 
                            <br/><br/>
                            <p1>ou</p1> 
                            <br/><br/>
</template>
      <a
        class="
          button
          google-btn
          is-google is-outlined is-info is-rounded is-medium is-fullwidth
        "
        @click="loginWithGoogle"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          viewBox="0 0 48 48"
          class="abcRioButtonSvg"
        >
          <g>
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            ></path>
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            ></path>
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            ></path>
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            ></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </g>
        </svg>
        <span>Entrar com o Google</span>
      </a>
    </div>
    <br /><br /><br /><br /><br /><br /><br />
    Você não tem conta?
    <router-link to="/registrar">crie uma agora mesmo!</router-link>
  </div>
</template>


<script>
import firebase from "firebase";
import SocialLogin from "../components/SocialLogin.vue";

export default {
  name: "login",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SocialLogin,
  },
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
.google-btn:hover {
  cursor: pointer;
  box-shadow: 0px 0px 3px #4195fc !important;
}
.google-btn {
  position: relative;
  display: block;
  align-items: center;
  height: 34px;
  color: white;
  background-color: #4285f4;
  width: 100%;
  border-radius: 2px;
}
.google-btn svg {
  position: absolute;
  display: inherit;
  width: 10%;
  margin: 3px;
  background-color: white;
  padding: 4px;
  height: 27px;
}
.google-btn span {
  top: 14%;
  position: relative;
  display: inline-block;
}
</style>