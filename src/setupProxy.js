
// proxy 代理  转发规则
const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://127.0.0.1:4001/',
        pathRewrite: {
            "^/api": "/"
        }
    }));
    app.use(proxy('/auth', {
        target: 'http://127.0.0.1:4002/',
        pathRewrite: {
            "^/auth": "/"
        }
    }));
};