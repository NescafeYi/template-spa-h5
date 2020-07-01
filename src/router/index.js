import React from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { routes } from './routes';
import { Toast } from 'antd-mobile';


// 权限认证 进入路由之前的校验 （例如：是否已经登录 || 是否拥有该路由进入权限）
const checkAuth = (props) => {
    Toast.fail('暂无进入权限');
    props.history.push('/home')
    return false
}


// 子路由控制
export const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={props => {
                let allow = true
                if (route.auth) allow = checkAuth(props);
                return allow ? <route.component {...props} routes={route.routes} /> : '' // 向下传递子路由以保持嵌套
            }}
        />
    );
}

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
}

export default RouteConfig;

