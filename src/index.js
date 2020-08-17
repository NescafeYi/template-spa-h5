
//ie polyfill 兼容9+
import './polyfill';
import 'core-js/es';
import 'mutation-observer';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import '@/less/index.less';
import '@/services/axios-config';
import * as serviceWorker from './serviceWorker';
import RouteConfig from './router';

import VConsole from 'vconsole';

// 开发环境和测试环境打开VConsole
const isDevOrSit = process.env.REACT_APP_ENV.includes('dev') || process.env.REACT_APP_ENV.includes('sit');
if (isDevOrSit) new VConsole();

ReactDOM.render(<RouteConfig />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
