import { FormatDictData, GetArrMap } from '@/utils/data-utils';


// 报障状态
export const WORKORDER_STATUS = { AWAIT: 1, BEING: 2, DONE: 3 };
export const WORKORDER_STATUS_LIST = [
    { label: '待处理', key: 'await', value: WORKORDER_STATUS.AWAIT },
    { label: '处理中', key: 'being', value: WORKORDER_STATUS.BEING },
    { label: '已完成', key: 'done', value: WORKORDER_STATUS.DONE }
];
export const WORKORDER_STATUS_MAP = FormatDictData(WORKORDER_STATUS_LIST, 'value', 'label').map;

// 报障-所属产品
export const ORDER_PRODUCT_LIST = [
    { label: 'CBS财资管理', value: 1 },
    { label: '其它产品', value: 2 }
];
export const ORDER_PRODUCT_MAP = GetArrMap(ORDER_PRODUCT_LIST);