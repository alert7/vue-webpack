import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/home.vue'
import About from '../components/about.vue'
let routers = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
];

export default new Router({
  routes: routers
})