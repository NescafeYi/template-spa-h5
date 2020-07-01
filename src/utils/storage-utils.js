import { HasOwnProperty } from './data-utils';

const SYSTEM_NAME = ''; //可添加统一缓存的前缀名

var _setItem = function _setItem(key, value) {
    sessionStorage.setItem(SYSTEM_NAME + key, value);
};

var _getItem = function _getItem(key, defaultValue) {
    return sessionStorage.getItem(SYSTEM_NAME + key) || defaultValue;
};

var _removeItem = function _removeItem(key) {
    sessionStorage.removeItem(SYSTEM_NAME + key);
};

var _setLocalItem = function _setItem(key, value) {
    localStorage.setItem(SYSTEM_NAME + key, value);
};

var _getLocalItem = function _getItem(key, defaultValue) {
    return localStorage.getItem(SYSTEM_NAME + key) || defaultValue;
};

var _removeLocalItem = function _removeItem(key) {
    localStorage.removeItem(SYSTEM_NAME + key);
};

// 获取存储的对象数据
export const ParseStroageItem = (key, defaultValue, isSession) => {
    let data = GetStroageItem(key, defaultValue, isSession);
    try {
        return data && JSON.parse(data);
    } catch (error) {
        return defaultValue;
    }
};
export const StringifyStroageItem = (key, value, isSession) => {
    if (key && value) {
        try {
            SetStroageItem(key, JSON.stringify(value), isSession);
        } catch (error) {
            console.error(error);
        }
    }
};
export const GetStroageItem = function (key, defaultValue, isSession) {
    if (isSession) {
        return _getLocalItem(key, defaultValue);
    } else {
        return _getItem(key, defaultValue);
    }
};
export const SetStroageItem = function (key, value, isSession) {
    if (isSession) {
        _setLocalItem(key, value);
    } else {
        _setItem(key, value);
    }
};
export const RemoveStroageItem = function (key, isSession) {
    if (isSession) {
        _removeLocalItem(key);
    } else {
        _removeItem(key);
    }
};
export const ClearStroage = () => {
    // 清掉当前系统所有的storage储存
    for (const key in localStorage) {
        if (HasOwnProperty(localStorage, key)) {
            if (key.indexOf(SYSTEM_NAME) === 0) {
                localStorage.removeItem(key);
            }
        }
    }
    for (const key in sessionStorage) {
        if (HasOwnProperty(sessionStorage, key)) {
            if (key.indexOf(SYSTEM_NAME) === 0) {
                sessionStorage.removeItem(key);
            }
        }
    }
};

// 获取服务器时间
export const GetStorageSrvTime = () => {
    let srvTime = StorageUtils.getItem('srvTime', null);
    return srvTime;
};

const StorageUtils = {
    setItem: SetStroageItem,
    getItem: GetStroageItem,
    removeItem: RemoveStroageItem,
    clear: ClearStroage
};


export default StorageUtils;