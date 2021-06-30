import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/app"

Vue.config.productionTip = false

var config = {
    apiKey: "AIzaSyB0Ijei2A5uTsJZ8E3IOWAOSrd-OkF1snU",
    authDomain: "fluxo-de-caixa-api.firebaseapp.com",
    projectId: "fluxo-de-caixa-api",
    storageBucket: "fluxo-de-caixa-api.firebaseapp.com",
    messagingSenderId: "234446430144",
    appId: "1:234446430144:web:cc1b193be05fa156727225",
    measurementId: "G-W58KS8WHG4"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import "firebaseui/dist/firebaseui.css";
import "@fortawesome/fontawesome-free"
firebase.auth().languageCode = 'it';

let app = '';
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            render: h => h(App)
        }).$mount('#app');
    }
    firebase.auth().signOut().then(() => {})



})