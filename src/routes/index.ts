import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/Pinia',
        name: 'pinia',
        component: () => import('../views/Pinia.vue')
    },
    {
        path: '/vuex',
        name: 'vuex',
        component: () => import('../views/Vuex.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router