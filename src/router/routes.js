import loadable from '@/utils/route-config';

// 配置路由
export const routes = [
    {
        path: '/home',
        component: loadable(() => import('@/pages/home'))
    },
    {
        path: '/authWechat',
        inWechat: true,
        component: loadable(() => import('@/pages/auth-wechat'))
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