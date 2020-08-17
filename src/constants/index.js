
export const ServiceMessage = {
    SUCCESS: '更新成功',
    DELETE: '删除成功',
    ADD: '添加成功',
    CREATE: '创建成功',
    CLOSE: '关闭成功',
    SUBMIT: '提交成功',
    ERROR: '网络异常，请稍后重试',
    FAIL: '请求失败，请稍后重试'
};

// 默认分页的pagesize可选options
export const DEFAULT_PAGESIZE_OPTIONS = ['10', '20', '50', '100', '200'];

// 默认的颜色数组（例如图表的颜色配置）
export const DEFAULT_COLOR_LIST = [
    '#F6BD15', '#5B8FF9', '#5AD8A5', '#5D7092', '#6CC8EC', '#E8694A', '#9270C9',
    '#FF9E4D', '#FF99C3', '#279A99', '#78AAC3', '#F3CD86', '#038CB4', '#FE7966',
    '#EBDEBD', '#707CC9', '#F9637D', '#76B697', '#D6C48A', '#C8E7E3'
];

//文件上传的限制类型
export const FILES_ACCEPTS = {
    images: 'image/*',
    png: 'image/png',
    jpe: 'image/jpeg',//同jpeg
    jpg: 'image/jpeg', //同jpeg
    jpeg: 'image/jpeg',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    pdf: 'application/pdf',
    csv: 'text/csv'
};

//通用正则规则
export const PasswordReg = /(?!.*[\u4E00-\u9FA5\s])(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{8,16}$/;
export const REG_TYPES = {
    mobile: {
        len: 11,
        pattern: /^1[3|4|5|6|7|8|9][0-9]{9}$/,
        message: '请输入正确手机号'
    },
    number: {
        pattern: /^[0-9]*$/,
        message: '请输入数字'
    },
    twoDecimal: {
        pattern: /^(?:[1-9]\d*|0)(?:\.\d{1,2})?$/,
        message: '请输入数字且不可超过两位小数'
    }
};

export const ROUTER_LEAVE_TEXT = '是否离开页面，已修改的数据将不会被保存';
export const UPLOADING_LEAVE_TEXT = '文件正在上传,是否离开页面，离开后文件将取消上传';

// 下载页面二维码链接
export const GetLiuXiCodeLink = () => {
    switch (process.env.NODE_ENV) {
        case 'dev': // 开发
            return '';
        case 'sit': // 测试
            return 'http://150.129.193.16:1081/cms-web/liuxi-download.html';
        case 'prod':// 正式
            return 'http://fintech.mbcloud.com/cms-web/liuxi-download.html';
    }
};

