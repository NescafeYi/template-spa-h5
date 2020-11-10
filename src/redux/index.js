import { combineReducers } from 'redux';
import commonStore from './common';
import configStore from './store';

// action type
const CLEAR_ALL = 'GLOBAL:CLEAR_ALL';

// 初始化 state 数据
const initState = {};

// action，重置 redux
export const ClearAllStoreAction = () => (dispatch) => {
  dispatch({ type: CLEAR_ALL });
};
// 在此合并所有 reducer
const appReducer = combineReducers({
  commonStore
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_ALL) {
    state = initState;
  }
  return appReducer(state, action);
};

export default configStore(rootReducer);