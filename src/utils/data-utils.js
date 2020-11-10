export const HasOwnProperty = (obj = {}, ...attrs) => Object.prototype.hasOwnProperty.call(obj, ...attrs);

export const FormatDictData = (data = [], valueAttr = 'id', labelAttr = 'name') => {
  var list = data, map = {};
  list.forEach((item) => {
    item.value = item[valueAttr] || item.code;
    item.label = item[labelAttr];
    map[item.value] = item;
  });
  return { list, map };
};

export const GetArrMap = (arr = [], valueAttr = 'label', valueKey = 'value') => {
  var data = {};
  arr.forEach((item) => {
    const key = valueKey ? item[valueKey] : item.value;
    return data[key] = valueAttr ? item[valueAttr] : item;
  });
  return data;
};
