// import { GetUserMenu } from '@/services/common';
// import { GetAppInfoById } from '@/pages/applications/services';
// import { GetToken } from '@/core/session';

const AcitonType = {
  USER_MENU: 'COMMON:USER_MENU',
  RELOAD_TAG: 'RELOAD_TAG'
};

//初始化state数据
const initState = {};


const commonStore = (state, action) => {
  state = state || initState;
  switch (action.type) {
    case AcitonType.USER_MENU:
      return { ...state, ...action };
    case AcitonType.RELOAD_TAG:
      return { ...state, ...action };
    default:
      return state;
  }
};
export default commonStore;

// 获取用户菜单
// export const GetUserMenuAction = (refresh) => async (dispatch, getState) => {
//     let state = getState();
//     if (state.commonStore.userMenu && !refresh) return;
//     const resData = await GetUserMenu();
//     dispatch({
//         type: AcitonType.USER_MENU,
//         userMenu: resData
//     });
// };

// 根据id获取对应app应用信息
// export const GetAppInfoByIdAction = (appId, refresh) => async (dispatch, getState) => {
//     // console.log(appId);
//     let state = getState();
//     if (state.commonStore?.appInfo?.[appId] && !refresh) return;
//     const resData = await GetAppInfoById({ appId, token: GetToken() });
//     let appInfo = state.commonStore.appInfo || {};
//     appInfo[appId] = resData;
//     dispatch({
//         type: AcitonType.APP_INFO,
//         appInfo
//     });
// };