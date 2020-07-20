import { Result } from 'antd-mobile';
import styles from './styles.module.less';


export default class extends React.Component {
    constructor(props) {
        super(props);
        document.title = '请在微信客户端打开链接';
        this.state = {};
    }
    render() {
        return (
            <div id={styles['page-not-wechat']}>
                <Result
                    imgUrl={require('@/assets/icon-fail.png')}
                    title="请在微信客户端打开链接"
                    message=""
                />
            </div>
        );
    }
}