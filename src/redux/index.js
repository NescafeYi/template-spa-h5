import { combineReducers } from 'redux';
import commonStore from './common';

const CLEAR_ALL = 'GLOBAL:CLEAR_ALL';

// 初始化state数据
const initState = {};

// 重置redux
export const ClearAllStoreAction = () => (dispatch) => {
    dispatch({ type: CLEAR_ALL });
};

const appReducer = combineReducers({
    commonStore
});

const rootReducer = (state, action) => {
    if (action.type === CLEAR_ALL) {
        state = initState;
    }
    return appReducer(state, action);
};

export default rootReducer;