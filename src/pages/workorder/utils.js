import { browser } from '@common/platform';
import { LocalStorageUtil } from '@src/plugin/local-storage';
import { GetParam } from '@src/plugin/common';

export const envUri = {
    dev: 'liuxisit.mbcloud.com/workorder/#/order-fillin',
}

export const isWechat = !!browser.versions.wechat;


// 已经废弃，不采用该种方式，在公众号配置进入的路径时候直接进的就是授权页
export const GetWechatAuth = () => {
    if (GetParam('state')) return;
    const isDev = process.env.NODE_ENV.includes('dev');
    const authBeforHash = window.location.hash; //记录授权之前的路由hash
    LocalStorageUtil.setItem('auth-befor-hash', authBeforHash);
    const baseUrl = isDev ? 'https://liuxisit.mbcloud.com' : 'https://liuxi.mbcloud.com';
    console.log(baseUrl)
    // 公众号的APPID
    // const appid = "wx7e66d486f850dc7c";
    const appid = "wx336b5f6bdbd6636f";
    // 授权回调页面
    const redirect_uri = encodeURIComponent('https://liuxisit.mbcloud.com/liuxi-h5/workorder/#/auth-wechat'); //暂时写死sit，因为现在是在生产上测试调试，生产记得替换baseUrl
    // 返回值类型 这里是code
    const response_type = "code";
    // 授权作用域 snsapi_userinfo：表示手动授权 ；snsapi_base：不弹出授权页面，直接跳转，只能获取用户openid
    const scope = "snsapi_base";
    // 跳转授权链接
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&state=DONE#wechat_redirect`;
}
