import { SetStroageItem, GetStroageItem, RemoveStroageItem, ParseStroageItem, ClearSessionStroage } from './storage-utils';
import { SessionConst, LocalConst } from '@/constants/storage';

export const ClearUserInfo = () => {
  RemoveStroageItem(SessionConst.SRV_TIME, false);
  RemoveStroageItem('token', false);
  RemoveStroageItem('user_info', false);
  ClearSessionStroage();
};
const TOKEN_ITEM_NAME = 'token';

export const TokenStorage = {
  get: (token) => GetStroageItem(TOKEN_ITEM_NAME, token),
  put: (token, isExternal = false) => {
    // 重置登录失效的状态
    delete global.tokenFail;
    SetStroageItem(SessionConst.IS_EXTERNAL_AUTH, isExternal, true);
    SetStroageItem(TOKEN_ITEM_NAME, token);
  }
};
export const SetToken = TokenStorage.put;
export const GetToken = TokenStorage.get;

export const IsExternalAuth = () => ParseStroageItem(SessionConst.IS_EXTERNAL_AUTH, false, true);









/**
 * 退出登录
 * @param {Boolean} showToast 是否提示message 
 * @param {Boolean} reload 传递 是否需要重新刷新的参数 给重定向的页面
 */
// export const Logout = (showToast = true, reload = false) => {
// if (!global.tokenFail) {
// ClearUserInfo();
// 记录登录失效过
// global.tokenFail = true;
// console.log(IsExternalAuth());
// if (IsExternalAuth()) {
//     showToast && alert('登录状态已失效，请关闭窗口重新进入');
//     window.close();
// } else {
// showToast && message.warning('登录失效，请重新登录');
// history.replace({
//     pathname: RoutePage.login,
//     state: { reload }
// });
// }
// }
// };
const keys = {
  PARAM: 'param',
  USER_INFO: 'user_info'
};

export const SetUserInfo = function (userInfo) {
  SetStroageItem(keys.USER_INFO, JSON.stringify(userInfo));
};
export const GetUserInfo = function () {
  var paramObj;
  var param = GetStroageItem(keys.USER_INFO);
  if (param != undefined) {
    paramObj = JSON.parse(param);
  }
  return paramObj;
};

// 获取服务器时间戳
export const GetSrvTime = () => {
  let time = GetStroageItem(SessionConst.SRV_TIME, null, true);
  return parseInt(time);
};

// 获取缓存的版本号
export const GetStroageVersion = () => GetStroageItem(LocalConst.VERSION);
export const SetStroageVersion = (version) => SetStroageItem(LocalConst.VERSION, version);
