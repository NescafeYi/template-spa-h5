

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`
在开发模式下运行app<br />
打开[http://localhost:8126](http://localhost:8126)在浏览器中查看。
如果进行编辑，页面将重新加载。<br />
您还将在控制台中看到任何lint错误。

### `yarn test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`
将用于生产的应用程序构建到“dist”文件夹。<br />
它在生产模式下正确地绑定了React并优化构建以获得最佳性能。
构建被缩小，文件名包含散列。<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### 当前项目已扩展（在creact-react-app的基础上）
- 兼容ie9+,已补充`polyfill`垫片
- 支持TypeScript
- 可使用less sass
- 使用vw方案适配移动端 `config/webpack.config.js 130行~156行`
- 引进antd-mobile，且按需引入，可配置antd-mobile自定义主题`config/theme.json`
- 全局样式变量及方法`src/less/global/index.less`
- 使用react-router
- 使用react-loadable进行路由懒加载 `src/utils/route-config.js`
- 使用路径别名 `tsconfig.json`
- 改写 creact-react-app内嵌的eslint规则 `.eslintrc.json`、`.eslintrc.js`
- 修改css格式化规则 `.jsbeautifyrc`
- 修改vscode设置 `.vscode`
- 可在 `setupProxy.js` 修改反向代理
- 引进axios，并配置axios拦截器 `axios-config.js`
- 部分工具 `src/utils` 
