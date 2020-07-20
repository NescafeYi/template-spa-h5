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
        path: '/orderFillin',
        inWechat: true,
        component: loadable(() => import('@/pages/workorder/order-fillin'))
    },
    {
        path: '/orderList',
        inWechat: true,
        component: loadable(() => import('@/pages/workorder/order-list'))
    },
    {
        path: '/orderDetail/:id',
        inWechat: true,
        component: loadable(() => import('@/pages/workorder/order-detail'))
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