import React from 'react';
import {AutoComplete} from 'antd';
import 'antd/dist/antd.css';

/***
 * 自动完成
 */
function onSelect(value){
    console.log('onSelect',value);
}
class Complete extends React.Component{
    state = {
        value : '',
        dataSource:[],
    };
    onSearch = searchText => {
        this.setState({
            dataSource:!searchText?[]:[searchText,searchText.repeat(2),searchText.repeat(3)],
        })
    };
    onChange = value => {
        this.setState({value});
    }
    render() {
        const {dataSource,value} = this.state;
        return (
            <div>
                <AutoComplete
                    dataSource={dataSource}
                    style={{width:200}}
                    onSelect={onSelect}
                    onSearch={this.onSearch}
                >
                </AutoComplete>
                <AutoComplete
                    value={value}
                    dataSource={dataSource}
                    style={{width:200}}
                    onSelect={onSelect}
                    onSearch={this.onSearch}
                    onChange={this.onChange}
                >
                </AutoComplete>               
            </div>
        )
    }

}
export default Complete;