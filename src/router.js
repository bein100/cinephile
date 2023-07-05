import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/films', name: 'films', component: () => import('@/pages/Films.vue') },
        { path: '/series', name: 'series', component: () => import('@/pages/Series.vue') },
        { path: '/search', name: 'search', component: () => import('@/pages/Search.vue') },
        { path: '/movie/:id', name: 'movieid', component: () => import('@/pages/MovieId.vue')},
        { path: '/tv/:id', name: 'serialid', component: () => import('@/pages/SerialId.vue')}
    ],
    scrollBehavior () {
        return {
            top: 0
        }
    }
})
export default routers 