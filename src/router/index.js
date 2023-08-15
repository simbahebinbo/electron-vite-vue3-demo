import { createRouter, createWebHashHistory } from "vue-router"

// 1. 定义路由配置
const routes = [
    {
        path: "/",
        redirect: '/index/page1'
    },
    {
        path: "/index",
        name: 'home',
        component: () => import('../views/index.vue'),
        children: [
            {
                path: 'page1',
                name: 'page1',
                component: () => import('../views/page1/index.vue'),
            },
            {
                path: 'page2',
                name: 'page2',
                component: () => import('../views/page2/index.vue'),
            },
        ],
    },
    {
        path: '/404',
        name: 'notFound',
        component: () => import('../views/notFound/index.vue'),
    },
    // 所有未定义路由，全部重定向到404页
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
        hidden: true
    }
];

// 2. 创建路由实例
const router = createRouter({
    // 4. 采用hash 模式
    history: createWebHashHistory(),
    // 采用 history 模式
    // history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router

