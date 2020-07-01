

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`
在开发模式下运行app<br />
打开[http://localhost:3000](http://localhost:3000)在浏览器中查看。
如果进行编辑，页面将重新加载。<br />
您还将在控制台中看到任何lint错误。

### `yarn test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`
将用于生产的应用程序构建到“build”文件夹。<br />
它在生产模式下正确地绑定了React并优化构建以获得最佳性能。
构建被缩小，文件名包含散列。<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### 当前项目已扩展（在creact-react-app的基础上）
- 兼容ie9+
- 可使用less sass
- 引进antd，且按需引入，可配置antd自定义主题
- 使用react-router
- 使用路径别名 `tsconfig.json`
- 改写 creact-react-app内嵌的eslint规则 `.eslintrc.json`
- 修改css格式化规则 `.jsbeautifyrc`
- 修改vscode设置 .vscode
- 可在 `setupProxy.js` 修改反向代理
- 引进axios，并配置axios拦截器 `axios-config.js`
- 部分工具 `utils` 
# template-spa-h5
