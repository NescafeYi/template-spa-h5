import { Toast } from "antd-mobile";
import { GetParam } from "@src/plugin/common";
import { GetUserTokenByCode } from "../services";
import { ClearWechatToken, SetWechatToken } from "@common/base";

/**
 * 微信授权页面（中转页）
 * 只处理授权逻辑，不做渲染
 */

const AuthWechat = (props) => {
    document.title = '';
    const code = GetParam('code');
    const routePath = GetParam('state'); // 公众号配置路径，state带过来的就是对应的路由
    const getTokenByCode = async () => {
        if (code) {
            // 先清除token
            ClearWechatToken();
            // 根据code 获取token
            let token = await GetUserTokenByCode(code);
            SetWechatToken(token)
            props.history.replace(routePath);
        } else {
            errorHandle();
        }
    }

    // 授权失败的处理
    const errorHandle = () => {
        // this.props.history.replace({ pathname: "/" });
        Toast.fail("微信授权失败, 请稍后再试");
    }

    getTokenByCode();

    return null;
}

export default AuthWechat;
