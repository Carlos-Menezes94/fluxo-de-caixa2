import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/app"

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyB0Ijei2A5uTsJZ8E3IOWAOSrd-OkF1snU",
  authDomain: "fluxo-de-caixa-api.firebaseapp.com",
  projectId: "fluxo-de-caixa-api",
  storageBucket: "fluxo-de-caixa-api.appspot.com",
  messagingSenderId: "234446430144",
  appId: "1:234446430144:web:cc1b193be05fa156727225",
  measurementId: "G-W58KS8WHG4"
};
// Initialize Firebase
firebase.initializeApp(config);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
