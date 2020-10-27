import * as React from 'react';
import { Toast } from 'antd-mobile';
import Empty from '@/components/emtry';


export default class extends React.Component {
    componentDidMount() {
        document.title = '页面不存在';
        Toast.fail('页面不存在');
    }
    render(): any {
        return (
            <div className="page-not-wechat">
                <Empty text="页面不存在" />
            </div>
        );
    }
}