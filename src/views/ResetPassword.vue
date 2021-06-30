<template>
  <div class="resetpassword">
    <h1>Redefinição de senha</h1>
    <br />
    <br />
    <br />

    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <br />
    <br />

    <button @click="resetPassword">Enviar solicitação</button>
    <br />
    <br />
    <br />

    <span> ou retorne ao <router-link to="/login"> login.</router-link> </span>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "resetPassword",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
    resetPassword() {
      if (!this.email) {
        this.error = "Please type in a valid email address.";
        return;
      }
      this.error = null;
      this.emailSending = true;
     firebase.auth().sendPasswordResetEmail(this.email);
     firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.emailSending = false;
        })
        .catch((error) => {
          this.emailSending = false;
          this.error = error.message;
        });
    },
  },
};
</script>

// export default {
//     name: "resetPassword", 
//     data() {
//     return {
//       email: "",
//     };
//   },
//   methods: {
//     sendEmail() {
//       console.log(this.email);
//       console.log('test')
//       // if (!this.email) {
//       //   this.error = "Please type in a valid email address.";
//       //   return;
//       // }
//       // this.error = null;
//       // this.emailSending = true;
//       // firebase
//       //   .auth()
//       //   .sendPasswordResetEmail(this.email)
//       //   .then(() => {
//       //     this.emailSending = false;
//       //   })
//       //   .catch((error) => {
//       //     this.emailSending = false;
//       //     this.error = error.message;
//       //   });
//     },
//   },
// };
