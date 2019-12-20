import VueRouter from 'vue-router';
import App from './app';
import Vue from 'vue';

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/components/home')
        },
        {
            path: '/',
            name: 'login',
            component: () => import('@/app')
        }
    ]
})


new Vue({
    el: '#app',
    render: h => h(App),
    router
})