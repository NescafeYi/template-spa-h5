import { SetStroageItem, GetStroageItem, RemoveStroageItem } from './storage-utils';


const WECHAT_TOKEN = 'wechat-token';

// 微信token
export const SetWechatToken = (token) => {
    return SetStroageItem(WECHAT_TOKEN, token);
};
export const GetWechatToken = () => {
    return GetStroageItem(WECHAT_TOKEN, null);
};
export const ClearWechatToken = () => {
    RemoveStroageItem(WECHAT_TOKEN);
};
