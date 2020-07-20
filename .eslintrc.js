module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: [
                'react',
                'html',
                '@typescript-eslint',
                // 'jsx-control-statements',
            ],
            extends: [
                'eslint:recommended',
                // 'plugin:react/recommended',
                'plugin:@typescript-eslint/recommended',
                // 'plugin:jsx-control-statements/recommended'
            ]
        },
        {
            files: ['*.js', '*.jsx'],
            parser: 'babel-eslint',
            parserOptions: {
                ecmaFeatures: {
                    experimentalObjectRestSpread: true,
                    jsx: true,
                },
                ecmaVersion: 7,
                sourceType: 'module',
            },
            plugins: ['react', 'html'],
            extends: ['eslint:recommended'],
        }
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',  //关掉ts 定义为any类型的warning
        'react/jsx-boolean-value': 2, //在JSX中属性值为 true, 可以直接省略
        'react/jsx-curly-spacing': [
            2,
            {
                when: 'never',
                children: true,
            },
        ], //在JSX属性和表达式中加强或禁止大括号内的空格。
        'react/jsx-indent-props': [2, 4], //验证JSX中的props缩进
        'react/jsx-key': 2, //在数组或迭代器中验证JSX具有key属性
        'react/jsx-max-props-per-line': [
            1,
            {
                when: 'multiline',
            },
        ], // 限制JSX中多行情况只能有一个props
        // "react/jsx-no-bind": 1, //JSX中不允许使用箭头函数和bind
        'react/jsx-no-duplicate-props': 2, //防止在JSX中重复的props
        'react/jsx-no-literals': 0, //防止使用未包装的JSX字符串
        // "react/jsx-no-undef": 0, //在JSX中禁止未声明的变量
        'react/jsx-pascal-case': 0, //为用户定义的JSX组件强制使用PascalCase
        'react/jsx-sort-props': 0, //强化props按字母排序
        'react/jsx-uses-react': 1, //防止反应被错误地标记为未使用
        'react/jsx-uses-vars': 2, //防止在JSX中使用的变量被错误地标记为未使用
        // "react/no-danger": 1, //防止使用危险的JSX属性
        'react/no-did-mount-set-state': 1, //防止在componentDidMount中使用setState
        'react/no-did-update-set-state': 1, //防止在componentDidUpdate中使用setState
        'react/no-direct-mutation-state': 0, //防止this.state的直接变异
        'react/no-multi-comp': 0, //防止每个文件有多个组件定义
        // "react/no-set-state": 0, //防止使用setState
        'react/no-unknown-property': 2, //防止使用未知的DOM属性
        'react/prefer-es6-class': 2, //为React组件强制执行ES5或ES6类
        // "react/prop-types": 1, //防止在React组件定义中丢失props验证
        'react/react-in-jsx-scope': 2, //使用JSX时防止丢失React
        // "react/self-closing-comp": 0, //防止没有children的组件的额外结束标签
        // "react/sort-comp": 1, //强制组件方法顺序
        'no-extra-boolean-cast': 1, //禁止不必要的bool转换
        // "react/no-array-index-key": 0, //防止在数组中遍历中使用数组key做索引
        'react/no-deprecated': 1, //不使用弃用的方法
        'react/jsx-equals-spacing': 2, //在JSX属性中强制或禁止等号周围的空格
        'react/jsx-closing-tag-location': 1, // 强制标签对齐
        'react/jsx-closing-bracket-location': 1, // 标签关闭的规则: 换行
        // "react/jsx-tag-spacing":1, // jsx 标签空格跟换行规则
        'no-unreachable': 1, //不能有无法执行的代码
        'comma-dangle': 2, //对象字面量项尾不能有逗号
        'no-mixed-spaces-and-tabs': 1, //禁止混用tab和空格
        'prefer-arrow-callback': 2, //比较喜欢箭头回调
        'no-duplicate-case': 2, //switch中的case标签不能重复
        'no-prototype-builtins': 1, // 禁止直接使用 Object.prototypes 的内置属性
        'arrow-parens': 1, //箭头函数用小括号括起来
        'arrow-spacing': 1, //=>的前/后括号
        'no-multi-spaces': 1, //禁止使用多个空格
        'require-atomic-updates': 0, //
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        //单引号
        quotes: ['error', 'single'],
        //强制在JSX属性（jsx-quotes）中一致使用双引号
        'jsx-quotes': [2, 'prefer-double'],
        semi: ['error', 'always'],
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        // 'jsx-control-statements/jsx-control-statements': true,
    },
    globals: {
        ReactDOM: true,
        React: true,
        ReactRouter: true,
        UE: true,
        EleConst: true,
        _: true,
    },
    settings: {
        react: {
            // Regex for Component Factory to use,
            // default to "createReactClass"
            createClass: 'createReactClass',
            // Pragma to use, default to "React"
            pragma: 'React',
            // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
            version: 'detect',
            // "flowVersion": "0.53" // Flow version
        },
        'import/ignore': ['node_modules', 'static/libs'],
    },
};
