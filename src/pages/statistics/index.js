import styles from './index.module.less';
// import AntNavBar from '@/components/ant-mobile/nav-bar';
import { useState, useEffect } from 'react';
import { GetHourStatistics } from './services';
import { GROUPHOUR_AUDIT_STATUS } from '@/constants/common';


const PageStatistics = () => {
  document.title = '统计';
  const [data, setData] = useState(null);

  const getDetail = async () => {
    let resDate = await GetHourStatistics();
    setData(resDate);
  };

  // 初始化
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className={styles['pageStatistics']}>
      {/* <AntNavBar appBack>统计</AntNavBar> */}
      {
        !!data &&
        <div className={styles['content-container']}>
          <div className={styles['card']}>
            <div className={styles['card-head']}>
              <p className={styles['title']}>团队工时</p>
              <p className={styles['time']}>{data.startMonthDate} 至 {data.endMonthDate}</p>
            </div>
            <ul className={styles['lists']}>
              {
                GROUPHOUR_AUDIT_STATUS.map((item, index) => (
                  <li key={index}>
                    <p><span>{data?.lstApiWorkingHourDto[index]?.number || 0}</span><span className={styles['unit']}>条</span></p>
                    <p className="minor-color">{item.label}</p>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-head']}>
              <p className={styles['title']}>团队利用率</p>
              <p className={styles['time']}>{data.startMonthDate} 至 {data.endMonthDate}</p>
            </div>
            <ul className={styles['list-group']}>
              {
                data.lstApiWorkingHourUtilizationDto.map((item, index) => (
                  <li key={index} className={styles['item-list']}>
                    <h4>{item.orgName}</h4>
                    <div className={styles['item-list-content']}>
                      {
                        item.utilizationDtoChildren.map((chil, chilIndex) => (
                          <div key={`${index}${chilIndex}`}>
                            <p><span>{(chil.utilization || 0).toFixed(2)}</span><span className={styles['unit']}>%</span></p>
                            <p className="minor-color">{chil.orgName}</p>
                          </div>
                        ))
                      }
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      }
    </div>
  );
};
export default PageStatistics;