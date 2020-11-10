//在这扩展store，让其具备更多能力

import thunk from 'redux-thunk'; // redux-thunk 支持 dispatch function，并且可以异步调用它
// import { createLogger } from 'redux-logger'; // 利用redux-logger打印日志
import { createStore, applyMiddleware, compose } from 'redux'; // 引入redux createStore、中间件及compose 
const isDev = process.env.REACT_APP_ENV !== 'prod';

// 调用日志打印方法
// const loggerMiddleware = createLogger();

// // 创建一个中间件集合
const middleware = [
  thunk
  //打印redux日志，需要调试的时候打开，可以在控制台查看redux每次的变化
  // loggerMiddleware,
];
// 用参数列表的方式，方便动态决定要传入哪些插件
const attrs = [applyMiddleware(...middleware)];
//在chrome调试工具中添加redux的选项卡,方便查看redux。(需要安装redux-devtools扩展程序)
isDev && window.__REDUX_DEVTOOLS_EXTENSION__ && attrs.push(window.__REDUX_DEVTOOLS_EXTENSION__());

// 利用compose增强store，这个 store 与 applyMiddleware 一起使用
const configStore = compose(...attrs)(createStore);

export default configStore;