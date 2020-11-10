import Axios from 'axios';
import moment from 'moment';
import { Team_URL } from '@/services/constant';

// 小组利用率统计查询
export const GetHourStatistics = async (data = {}) => {
  return Axios({
    method: 'post',
    url: `${Team_URL}/api/projectWorkingHour/v1/hour/query/statistics`,
    data
  }).then((res) => {
    let resData = res.data;
    resData.endMonthDate = moment(resData.endMonthDate).format('YY/MM/DD');
    resData.endWeekDate = moment(resData.endWeekDate).format('YY/MM/DD');
    resData.startMonthDate = moment(resData.startMonthDate).format('YY/MM/DD');
    resData.startWeekDate = moment(resData.startWeekDate).format('YY/MM/DD');
    if (resData.lstApiWorkingHourDto) {
      resData.lstApiWorkingHourDto.sort((a, b) => {
        return a.status - b.status;
      });
    }
    return res.data;
  });
};