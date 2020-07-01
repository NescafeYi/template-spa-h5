
//ie polyfill 兼容9+
import './polyfill'
import 'core-js/es';
import 'mutation-observer';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';


import '@/less/index.less';
import '@/utils/axios-config';
import * as serviceWorker from './serviceWorker';
import RouteConfig from './router';


ReactDOM.render(<RouteConfig />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
