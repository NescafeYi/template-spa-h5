import Axios from 'axios';
const Api = '/cmb-xt-api';
const baseURL = Api + '/ov-workorder';
const AuthURL = Api + '/auth';
const LiuxiURL = Api + '/ov-liuxi';

// 根据code获取token
export const GetUserTokenByCode = (code) => {
    return Axios({
        method: 'get',
        baseURL: AuthURL,
        url: `/jwt/v1/wechat/official/account/h5/code/login`,
        params: { code }
    }).then((res) => res.data);
};

// 获取个人信息
export const GetUserInfo = () => {
    return Axios({
        method: 'get',
        baseURL,
        url: `/wechatUser/v1/wechat/user/info`,
    }).then((res) => res.data);
}

// 添加工单
export const AddWorkOrder = (data = {}) => {
    return Axios({
        method: 'post',
        baseURL,
        url: `/wechatWorkorder/v1/wechat/workorder/add`,
        data
    }).then((res) => res.data);
}

// 获取工单列表
export const GetWorkOrderList = (data = {}) => {
    return Axios({
        method: 'post',
        baseURL,
        url: `/wechatWorkorder/v1/wechat/search/owner/workorder/list`,
        data
    }).then((res) => res.data);
}

// 获取工单详情
export const GetWorkOrderDetail = (id) => {
    return Axios({
        method: 'get',
        baseURL,
        url: `/wechatWorkorder/v1/wechat/workorder/detail/${id}`,
    }).then((res) => res.data);
}


// 上传图片 （这个是公共的，目前只有这里用到，后续整理项目的时候记得抽离出去）
export const UploadFiles = (data) => {
    return Axios({
        method: 'post',
        baseURL: LiuxiURL,
        url: `/api/file/v1/file/upload`,
        data
    }).then((res) => res.data);
}
