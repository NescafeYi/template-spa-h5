
//注册setupWebViewJavascriptBridge，通用的
function setupWebViewJavascriptBridge(name, data, callback) {
  if (window.EasyJSBridge) {
    return callback(window.EasyJSBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'easy-jsbridge://__BRIDGE_LOADED__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(() => {
    document.documentElement.removeChild(WVJBIframe);
  }, 0);
}

const callHandler = function (name, data, callback) {
  setupWebViewJavascriptBridge(name, data, (bridge) => {
    if (!window.EasyJSBridge) {
      window.EasyJSBridge = bridge;
    }
    window.EasyJSBridge.callHandler(name, data, callback);
  });
};

const registerHandler = function (name, callback) {
  setupWebViewJavascriptBridge((bridge) => {
    if (!window.EasyJSBridge) {
      window.EasyJSBridge = bridge;
    }
    window.EasyJSBridge.registerHandler(name, (data, responseCallback) => {
      callback(data, responseCallback);
    });
  });
};
// const getToken = function (callback) {
//     var bridge = window.EasyJSBridge;
//     //调用App注册好的一个名为test6的方法，带参数，带App响应回调
//     bridge.callHandler('getToken', 'token', function (data) {
//         callback && callback(data)
//     })
// }

// var h5Test3 = function (event) {
//     var bridge = window.EasyJSBridge;
//     //调用App注册好的一个名为test6的方法，带参数，带App响应回调
//     bridge.callHandler('test6', "123", function (data) {
//         alert('收到App的响应数据:' + data)
//     })
// }

// const popBack = function () {
//     var bridge = window.EasyJSBridge;
//     bridge.callHandler('popBack');
// }

export default {
  callHandler,
  registerHandler
};

