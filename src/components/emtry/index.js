
import styles from './styles.module.less';

export default class Empty extends React.Component {
    static defaultProps = {
        imgUrl: require('@/assets/images/no-data.png'),
        text: '暂无数据'
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { imgUrl, text } = this.props;
        return (
            <div className={styles['page-empty']}>
                <img src={imgUrl} alt="" />
                <p className={styles['empty-text']}>{text}</p>
            </div>
        );
    }
}