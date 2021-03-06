import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import firebase from 'firebase/app'
import ResetPassword from '../views/ResetPassword'


Vue.use(Router);

const router = new Router({
    routes: [{
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: "/resetpassword",
            name: "resetpassword",
            component: ResetPassword
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/registrar',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/about',
            redirect: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }

    ],
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('home');
    else next();



});


export default router;