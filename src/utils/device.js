const userAgent = navigator.userAgent;

// 判断浏览设备
export const browser = {
    versions: { //移动终端浏览器版本信息
        trident: userAgent.indexOf('Trident') > -1, //IE内核
        presto: userAgent.indexOf('Presto') > -1, //opera内核
        webKit: userAgent.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: userAgent.indexOf('Gecko') > -1 && userAgent.indexOf('KHTML') == -1, //火狐内核
        mobile: !!userAgent.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1, //android终端
        iPhone: userAgent.indexOf('iPhone') > -1, //是否为iPhone
        iPad: userAgent.indexOf('iPad') > -1, //是否iPad
        webApp: userAgent.indexOf('Safari') === -1, //是否web应该程序，没有头部与底部
        wechat: userAgent.match(/MicroMessenger/i), // 是否微信环境
        androidMiniProgram: userAgent.match(/Android.*MicroMessenger.*miniProgram/i), //安卓端的小程序
        iosWechat: userAgent.match(/iPhone.*MicroMessenger/i) //苹果端微信或小程序
    },
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

// 判断是否在微信
export const isWechat = !!browser.versions.wechat;

// 判断是否是ios
export const isIOS = /(iPhone|iPad|iPod|iOS)/i.test(userAgent);
