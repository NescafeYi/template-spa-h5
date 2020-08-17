import { GetToken } from './session';
import { GetUrlWithParams } from '@/utils';

export const FormatDictData = (data = [], valueAttr = 'id', labelAttr = 'name') => {
    var list = JSON.parse(JSON.stringify(data)), map = {};
    list.forEach((item) => {
        item.value = item[valueAttr] || item.code;
        item.label = item[labelAttr];
        map[item.value] = item;
    });
    return { list, map };
};

/**
 * 专门处理接口返回的常量字典格式的数据
 * @param {*} data 接收参数格式 {键：值}
 * 返回：原来值 和 格式为[{label: 值, value: 键}]的数组
 */
export function getDocArr(data) {
    const list = Object.keys(data).map((key) => {
        if (key != undefined) {
            return {
                label: data[key],
                value: key
            };
        }
    });
    return {
        list,
        map: data
    };
}

export const GetArrMap = (arr = [], valueAttr = 'label', valueKey = 'value') => {
    arr = JSON.parse(JSON.stringify(arr));
    var data = {};
    arr.forEach((item) => {
        const key = valueKey ? item[valueKey] : item.value;
        return data[key] = valueAttr ? item[valueAttr] : item;
    });
    return data;
};

// 截取时间后缀  例 2020-20-20 00:00:00， return：2020-20-20
export const CutDateSuffix = (date) => {
    return date.split(' ')[0];
};

/**
 * 接上七牛裁剪参数的图片url
 * @param {type String} image desc:图片路径
 * @param {type String} defaultImage desc:缺失时加载的本地图片地址
 * @param {type String} cutConfig desc:url后面加上七牛图片裁剪的配置  示例：?imageView2/1/w/64/h/64
 */
export const GetResourceUrl = (url) => {
    if (!url) return;
    var matchingKey = 'fp-api/file';
    if (url.indexOf(matchingKey) > -1 && url.indexOf('token=') === -1) {
        return GetUrlWithParams(url, { token: GetToken() });
    }
    return url;
};