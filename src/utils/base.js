//解决输入框聚焦后，键盘挡住输入框的问题
export const _ScrollIntoInput = () => {
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
    setTimeout(() => {
      document.activeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
};

//解决个别ios版本，键盘弹出顶起页面，收起时按钮错位的问题
export const _ButtonMisalignment = () => {
  var isReset = true;
  var u = navigator.userAgent;
  if (/(iPhone|iPad|iPod|iOS)/i.test(u)) {
    document.body.addEventListener('focusin', () => {
      isReset = false;
    });
    document.body.addEventListener('focusout', () => {
      isReset = true;
      setTimeout(() => {
        //当焦点在弹出层的输入框之间切换时先不归位
        if (isReset) {
          window.scroll(0, 0);//失焦后强制让页面归位
        }
      }, 100);
    });
  }
};

//间接判断是否安装app,有安装则打开app,没有则跳下载页
export const _GetIsInstallApp = (url, callback) => {
  var u = navigator.userAgent;
  var e = event || window.event;
  if (/MicroMessenger/i.test(u)) {
    e.preventDefault();
    callback && callback();
  } else if (/(iPhone|iPad|iPod|iOS)/i.test(u)) {
    window.location.href = url.open;
    setTimeout(() => {
      window.location.href = url.down;
    }, 1000);
  } else if (/Android/i.test(u)) {
    var iframe = document.createElement('iframe');
    iframe.src = url.open;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    setTimeout(() => {
      document.body.removeChild(iframe);
      window.location.href = url.down;
    }, 2000);
  }
};

// 处理键盘弹起，点击其他区域穿透的问题
export const _CheckKeyboard = (callback) => {
  var u = navigator.userAgent;
  if (/(iPhone|iPad|iPod|iOS)/i.test(u)) {
    return false;
    // document.body.addEventListener('focusin', () => {
    //     callback && callback(2);
    // });
    // document.body.addEventListener('focusout', () => {
    //     callback && callback(1);
    // });
  } else if (/Android/i.test(u)) {
    var originalHeight = document.documentElement.clientHeight || document.body.clientHeight;
    window.addEventListener('resize', () => {
      var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
      if (resizeHeight < originalHeight) {
        callback && callback(2);
      } else {
        callback && callback(1);
      }
    });
  }
};

// 获取字符串中的所有img标签的src属性
// export const _GetImgLabel = (str) => {
//     let imgReg = /<img.*?(?:>|\/>)/gi;
//     let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
//     let arr = str.match(imgReg) || []; // arr 为包含所有img标签的数组
//     let imgSrcArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         var src = arr[i].match(srcReg);
//         imgSrcArr.push(src[1]);
//     }
//     return imgSrcArr;
// };

// 根据图片路径获取图片宽高，并以数组形式返回
export const _GetImgItems = (list, callback) => {
  if (!list || list.length == 0) return;
  let count = 0;
  let imgItems = [];
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    getImageWidth(item, (width, height) => {
      imgItems.push({
        src: item,
        h: height,
        w: width
      });
      count++;
      if (count === (list.length)) {
        imgItems.sort((a, b) => {
          return list.indexOf(a.src) - list.indexOf(b.src);
        });
        callback && callback(imgItems);
      }
    });
  }
};
export const getImageWidth = (url, callback) => {
  var img = new Image();
  img.src = url;
  if (img.complete) {
    callback && callback(img.width, img.height);
  } else {
    img.onload = function () {
      callback && callback(img.width, img.height);
    };
  }
};

// 获取ios版本号
export const _GetIosVersion = () => {
  var u = navigator.userAgent.toLowerCase();
  var ver = u.match(/cpu iphone os (.*?) like mac os/);
  if (ver) {
    return ver[1].replace(/_/g, '.');
  } else {
    return false;
  }
};

// 判断安卓ios
export const _GetPhoneType = () => {
  var u = navigator.userAgent;
  if (/(iPhone|iPad|iPod|iOS)/i.test(u)) {
    return 'ios';
  } else if (/Android/i.test(u)) {
    return 'android';
  }
};

export const _GetRequireParam = (arr) => {
  if (!arr) return;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].require == 1) {
      obj[arr[i].code] = '';
    }
  }
  return obj;
};