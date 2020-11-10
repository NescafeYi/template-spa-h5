// 与app通讯的方法
import webBridge from './webBridge';
import { TokenStorage } from './session';
import { isIOS } from './device';

//App 的返回操作， 会销毁h5
export const AppPopBack = () => {
  if (isIOS) {
    webBridge.callHandler('popBack');
  } else {
    window.android && window.android.finish();
  }
};

//获取客户端用户token
export const GetAppToken = (callback) => {
  if (isIOS) {
    webBridge.callHandler('getToken', 'token', (data) => {
      TokenStorage.put(data);
      callback(data);
    });
  } else {
    if (window.android) {
      try {
        const userToken = window.android.getToken();
        userToken && TokenStorage.put(userToken);
        callback(userToken);
      } catch (err) {
        console.log(err);
      }
    }
  }
};