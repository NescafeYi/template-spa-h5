const SYSTEM_NAME = 'liuxi-app:';

let _setItem = (key, value) => {
  sessionStorage.setItem(SYSTEM_NAME + key, value);
};

let _getItem = (key, defaultValue) => {
  return sessionStorage.getItem(SYSTEM_NAME + key) || defaultValue;
};

let _removeItem = (key) => {
  sessionStorage.removeItem(SYSTEM_NAME + key);
};

let _setLocalItem = (key, value) => {
  localStorage.setItem(SYSTEM_NAME + key, value);
};

let _getLocalItem = (key, defaultValue) => {
  return localStorage.getItem(SYSTEM_NAME + key) || defaultValue;
};

let _removeLocalItem = (key) => {
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
export const GetStroageItem = (key, defaultValue, isSession) => {
  if (isSession == false || isSession == undefined) {
    return _getLocalItem(key, defaultValue);
  } else {
    return _getItem(key, defaultValue);
  }
};
export const SetStroageItem = (key, value, isSession) => {
  if (isSession == false || isSession == undefined) {
    _setLocalItem(key, value);
  } else {
    _setItem(key, value);
  }
};
export const RemoveStroageItem = (key, isSession) => {
  if (isSession == false || isSession == undefined) {
    _removeLocalItem(key);
  } else {
    _removeItem(key);
  }
};
export const ClearStroage = () => {
  // 清掉当前系统所有的storage储存
  for (const key in localStorage) {
    if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
      if (key.indexOf(SYSTEM_NAME) == 0) {
        localStorage.removeItem(key);
      }
    }
  }
  for (const key in sessionStorage) {
    if (Object.prototype.hasOwnProperty.call(sessionStorage, key)) {
      if (key.indexOf(SYSTEM_NAME) == 0) {
        sessionStorage.removeItem(key);
      }
    }
  }
};
export const ClearSessionStroage = () => {
  // 清掉当前系统所有的session储存
  for (const key in sessionStorage) {
    if (Object.prototype.hasOwnProperty.call(sessionStorage, key)) {
      if (key.indexOf(SYSTEM_NAME) == 0) {
        sessionStorage.removeItem(key);
      }
    }
  }
};
const StorageUtils = {
  setItem: SetStroageItem,
  getItem: GetStroageItem,
  removeItem: RemoveStroageItem,
  clear: ClearStroage
};


export default StorageUtils;