import loadable from '@/router/route-config';

// 配置路由
export const routes = [
    {
        path: '/statistics',
        auth: true,
        component: loadable(() => import('@/pages/statistics'))
    },
    {
        path: '/home',
        component: loadable(() => import('@/pages/home'))
    },
    {
        path: '/notWechat',
        component: loadable(() => import('@/pages/not-wechat'))
    },
    {
        path: '/404',
        component: loadable(() => import('@/pages/404'))
    }
];