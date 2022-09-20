import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/root.vue";

const routes = [
    {
        path: "/",
        name: "root",
        component: HomeView,
        redirect: "/index",
        children: [
            {
                name: "home",
                path: "/index",
                component: () => import("@/views/index.vue"),
            },
            {
                name: "article",
                path: "/article",
                component: () => import("@/views/article/index.vue"),
            },
            {
                name: "articleAdd",
                path: "/article/add",
                component: () => import("@/views/article/add.vue"),
            },
            {
                name: "articleDetail",
                path: "/article/:id",
                component: () => import("@/views/article/detail.vue"),
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
