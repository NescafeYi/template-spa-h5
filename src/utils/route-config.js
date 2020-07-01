// react路由懒加载

import Loadable from 'react-loadable';


export const LoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div></div>;
    }
    // Handle the error state
    else if (error) {
        console.error(error);
        return <div>模块已更新，请重新刷新页面</div>;
    }
    else {
        return null;
    }
};


//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = LoadingComponent) => {
    return Loadable({
        loader,
        loading
    });
}

