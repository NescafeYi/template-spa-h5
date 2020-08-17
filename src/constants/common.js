import { GetArrMap } from '@/utils/formatter';

// 通用字典
export const DEFAULT_CHOOSE_LIST = [
    { label: '是', value: 1 },
    { label: '否', value: 0 }
];
export const DEFAULT_CHOOSE_MAP = GetArrMap(DEFAULT_CHOOSE_LIST);
// 后台 一会用 1 0，一会用1 2 ，so：定义两份
export const DEFAULT_SELECT_LIST = [
    { label: '是', value: 1 },
    { label: '否', value: 2 }
];
export const DEFAULT_SELECT_MAP = GetArrMap(DEFAULT_SELECT_LIST);

// 审核状态
export const HOUR_AUDIT_STATUS = { UNWRITTEN: 0, SAVE: 1, SUBMIT: 2, AGREE: 3, REFUSE: 4 };
export const HOUR_ALL_AUDIT_STATUS = {
    unwritten: { label: '未填报', value: HOUR_AUDIT_STATUS.UNWRITTEN },
    save: { label: '待提交', value: HOUR_AUDIT_STATUS.SAVE },
    submint: { label: '待审核', value: HOUR_AUDIT_STATUS.SUBMIT },
    agree: { label: '已同意', value: HOUR_AUDIT_STATUS.AGREE },
    refuse: { label: '已拒绝', value: HOUR_AUDIT_STATUS.REFUSE }
};
const { unwritten, save, submint, agree, refuse } = HOUR_ALL_AUDIT_STATUS;
export const HOUR_AUDIT_ALL_STATUS_LIST = [unwritten, save, submint, agree, refuse]; //全量字典
export const GROUPHOUR_AUDIT_STATUS = [unwritten, save, submint]; //小组工时统计字典
export const HOUR_ALL_AUDIT_STATUS_MAP = GetArrMap(HOUR_AUDIT_ALL_STATUS_LIST);