import React, { useState, useEffect } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    useHistory
} from 'react-router-dom';
import { routes } from './routes';
import { Toast } from 'antd-mobile';
import { GetAppToken } from '@/utils/app-func';
import { GetToken } from '@/utils/session';


// 权限认证 进入路由之前的校验 （例如：是否已经登录 || 是否拥有该路由进入权限）
// const checkAuth = () => {
//     if (!GetToken()) {
//         Toast.fail('暂无进入权限');
//         document.title = '暂无进入权限';
//         return false;
//     }
//     return true;
// };

// 子路由控制 (2020-08-13更新：当前的权限改为获取app的token )
export const RouteWithSubRoutes = (route) => {
    const history = useHistory();
    const [token, setStateToken] = useState(null);
    const isDev = process.env.REACT_APP_ENV.includes('dev');
    const initAuth = () => {
        if (route.auth) {
            if (isDev) {
                // 开发环境使用本地token，方便调试
                setStateToken(GetToken());
            } else {
                GetAppToken((data) => {
                    if (data) {
                        setStateToken(data);
                    } else {
                        Toast.fail('获取 app token 失败');
                    }
                });
            }
        }
    };
    // 初始化
    useEffect(() => {
        initAuth();
    }, []);
    return (
        <Route
            path={route.path}
            render={(props) => {
                let allow = true;
                if (route.inWechat) { // 微信控制
                    history.replace('/notWechat');
                    return null;
                }
                if (route.auth && !token) return null;
                return allow ? <route.component {...props} routes={route.routes} /> : null; // 向下传递子路由以保持嵌套
            }}
        />
    );
};

const RouteConfig = () => {
    return (
        <Router>
            <Switch>
                {routes.map((item, i) => (
                    <RouteWithSubRoutes key={i} {...item} />
                ))}
                <Redirect to="/404" />
            </Switch>
        </Router>
    );
};

export default RouteConfig;

