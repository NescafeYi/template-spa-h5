
// proxy 代理  转发规则
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy(['/cmb-xt-api'], {
        target: 'http://150.129.193.16:1080',
        // pathRewrite: { "^/api": "/ov-admin/api" },
        changeOrigin: true,
        logLevel: 'debug'
    }));
    // app.use(proxy('/auth', {
    //     target: 'http://127.0.0.1:4002/',
    //     pathRewrite: {
    //         "^/auth": "/"
    //     }
    // }));
};