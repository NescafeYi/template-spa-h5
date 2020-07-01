import React from 'react';
import classnames from 'classnames';
import styles from './styles.less';

/**
 * 详情列组件
 * 参数说明:
 * @param {Number} labelWidth lable的宽度
 * @param {Array} labelStyle lable样式的覆盖
 */

export default class ColumnDetail extends React.Component {
    static defaultProps = {
        isRequire: false
    }
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { labelWidth, labelHover } = this.props;

        const cls = classnames(
            styles['column-wrap'],
            styles['column-in-detail'],
            this.props.className
        );

        const labelCls = classnames(
            styles['column-prefix'],
        );

        let labelStyle = {};
        labelWidth && (labelStyle.width = parseInt(labelWidth) + 'px');

        return (
            <div className={cls} style={{ width: this.props.width }}>
                {this.props.label
                    ? <label className={labelCls} style={labelStyle} title={labelHover && this.props.label} >{this.props.label}</label> : ''
                }
                {this.props.children && <span className={styles["column-content"]}>{this.props.children}</span>}
                {this.props.value && <span className={styles["column-content"]}>{this.props.value}</span>}
            </div>
        );
    }
}