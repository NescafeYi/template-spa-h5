import styles from './index.module.less';
import { NavBar } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import { AppPopBack } from '@/utils/app-func';

const AntNavBar = (props) => {
    const history = useHistory();

    const goBack = () => {
        if (props.appBack) { //使用app的返回
            try {
                AppPopBack();
            } catch (error) {
                console.log(error);
                history.goBack();
            }
        } else if (props.backRoute) {
            history.push(props.backRoute);
        } else {
            history.goBack();
        }
    };

    // 解决自定义props的警告
    const getDomProps = () => {
        let newProps = JSON.parse(JSON.stringify(props));
        delete newProps.appBack;
        return newProps;
    };

    const leftContent = <i onClick={goBack} className="iconfont icon-leftArrow" />;

    return (
        <NavBar
            className={styles['nav-bar']}
            leftContent={leftContent}
            {...getDomProps()}
        >
            {props.children}
        </NavBar >
    );
};

export default AntNavBar;