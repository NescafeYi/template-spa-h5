import Axios from 'axios';
import { Workorder_URL } from '@/services/constant';

// 获取个人信息
export const GetUserInfo = () => {
    return Axios({
        method: 'get',
        baseURL: Workorder_URL,
        url: '/wechatUser/v1/wechat/user/info'
    }).then((res) => res.data);
};

// 添加工单
export const AddWorkOrder = (data = {}) => {
    return Axios({
        method: 'post',
        baseURL: Workorder_URL,
        url: '/wechatWorkorder/v1/wechat/workorder/add',
        data
    }).then((res) => res.data);
};

// 获取工单列表
export const GetWorkOrderList = (data = {}) => {
    return Axios({
        method: 'post',
        baseURL: Workorder_URL,
        url: '/wechatWorkorder/v1/wechat/search/owner/workorder/list',
        data
    }).then((res) => res.data);
};

// 获取工单详情
export const GetWorkOrderDetail = (id) => {
    return Axios({
        method: 'get',
        baseURL: Workorder_URL,
        url: `/wechatWorkorder/v1/wechat/workorder/detail/${id}`
    }).then((res) => res.data);
};

