/**
 * 对axios的一些统一处理
 */

import Axios from 'axios';
import { Toast } from 'antd-mobile';
import { GetWechatToken } from './wechat';
import { SetStroageItem } from './storage-utils';


/**
 * 添加请求拦截器
 * 暂时不用，，添加微信token在请求头
 */
Axios.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    const token = GetWechatToken();
    if (token) {
        config.headers['Authorization'] = token;
    }
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});



// 添加响应拦截器
Axios.interceptors.response.use((response) => {
    // 对响应数据做点什么
    if (response.data && response.data.status === 200) {
        response.data.srvTime && SetStroageItem('srvTime', response.data.srvTime);
        return response.data;
    }
    Toast.fail((response.data && response.data.message) || Message.ERROR);
    return Promise.reject(response);
}, (error) => {
    // 对响应错误做点什么 , 处理401 403等错误处理
    switch (error.response.status) {
        case 401: case 403:
            Toast.fail((error.response.data && error.response.data.message) || Message.ERROR);
            break;
        default:
            Toast.fail(Message.ERROR);
    }
    return Promise.reject(error.response);
});

export const Message = {
    SUCCESS: '请求成功',
    ERROR: '网络异常，请稍后重试',
    FAIL: '请求失败，请稍后重试'
};



