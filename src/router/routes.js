// import { LoadableComponent } from './index';
import loadable from '@/utils/route-config';



// const Home = loadable(import('@/pages/home'))
// import App from '@/app';
// import Content1 from '@/pages/subnav1/content1';
// import Content2 from '@/pages/subnav1/content2';
// import Content5 from '@/pages/subnav2/content5';
// import Content6 from '@/pages/subnav2/content6';
// import Settimg from '@/pages/setting';

// 配置路由
export const routes = [
    {
        path: "/orderFillin",
        component: loadable(() => import('@/pages/workorder/order-fillin')),
    },
    {
        path: "/notWechat",
        component: loadable(() => import('@/pages/not-wechat')),
    },
    {
        path: "/404",
        component: loadable(() => import('@/pages/404')),
    },
    // {
    //     path: "/main",
    //     component: App,
    //     routes: [
    //         {
    //             path: "/main/content1",
    //             component: Content1
    //         },
    //         {
    //             path: "/main/content2",
    //             component: Content2
    //         },
    //         {
    //             path: "/main/content5",
    //             component: Content5
    //         },
    //         {
    //             path: "/main/content6",
    //             auth: true, //需要权限认证
    //             component: Content6
    //         }
    //     ]
    // },
    // {
    //     path: "/setting",
    //     auth: true, //需要权限认证
    //     component: Settimg,
    // },
]