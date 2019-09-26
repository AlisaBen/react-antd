import React from 'react';
import {ConfigProvider, DatePicker, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
/**
 * 使用component组件构建UI组件
 */
// class App1 extends React.Component{
//     render(){
//         return (
//             <div>ffffdfafa</div>
//         )
//     };

// }

class App1 extends React.Component{
    state = {
        date:null,
        things:"ff",
    };

    handleChange = date => {
        console.log(date);
        message.info(`您选择的日期是：${date ? date.format('YYYY-MM-DD'): '未选择'}`);
        this.setState({date});
    }

    handleThingChange = things => {
        console.log(things.target);
        message.info(`修改things状态：${things}`);
        this.setState({things});
    }

    render(){
        const {date, things} = this.state;
        return (
            <ConfigProvider locale={zhCN}>
                <DatePicker onChange={this.handleChange}></DatePicker>
                <div>当前日期：{date ? date.format('YYYY-MM-DD'):'未选择'}</div>
                <input onChange={this.handleThingChange}></input>
            </ConfigProvider>
        )
    };

}

export default App1;