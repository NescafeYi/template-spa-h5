import Axios from 'axios';
import { Liuxi_URL, Auth_URL } from './constant';



// 根据code获取token（微信服务号）
export const GetUserTokenByCode = (code) => {
  return Axios({
    method: 'get',
    baseURL: Auth_URL,
    url: '/jwt/v1/wechat/official/account/h5/code/login',
    params: { code }
  }).then((res) => res.data);
};



// 上传图片
export const UploadFiles = (data) => {
  return Axios({
    method: 'post',
    baseURL: Liuxi_URL,
    url: '/api/file/v1/file/upload',
    data
  }).then((res) => res.data);
};