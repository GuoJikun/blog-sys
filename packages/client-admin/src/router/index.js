import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/root.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: '/article',
                    name: 'article',
                    component: () => import('../views/article/list.vue'),
                    meta: {
                        title: '博客列表'
                    }
                },
                {
                    path: '/article/add',
                    name: 'articleAdd',
                    component: () => import('../views/article/add.vue'),
                    meta: {
                        title: '新增博客'
                    }
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login.vue')
        }
    ]
})

export default router
