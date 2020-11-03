import * as React from 'react';
import { Toast } from 'antd-mobile';
import Empty from '@/components/emtry';
// import { ClearAllStoreAction } from '@/redux';
import { connect } from 'react-redux';

interface CompProps {
    dispatch?: any;
    commonStore?: any;
}


class PageNotFound extends React.Component<CompProps> {
    componentDidMount() {
        document.title = '页面不存在';
        Toast.fail('页面不存在');
        // this.props.dispatch(ClearAllStoreAction()); // 重置redux
        console.log(this.props);
    }
    render(): any {
        return (
            <div className="page-not-wechat">
                <Empty text="页面不存在" />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return ({
        commonStore: state.commonStore
    });
};
export default connect(
    mapStateToProps,
    null, null, { forwardRef: true }
)(PageNotFound);