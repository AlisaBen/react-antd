import React from 'react';
import {Cascader} from 'antd';
import 'antd/dist/antd.css';

/**
 * 级联选择
 */
const options = [
    {
        value:'zhejiang',
        label:'zhejiang',
        children:[
            {
                value:'hangzhou',
                label:'hangzhou',
                children:[
                    {
                        value:'xihu',
                        label:'west lake'
                    }
                ]
            }
        ]
    },
    {
        value:'jiangsu',
        label:'jiangsu',
        children:[
            {
                value:'nanjing',
                label:'nanjing',
                children:[
                    {
                        value:'zhonghuamen',
                        label:'zonghuamen'
                    }
                ]
            }
        ]
    }
];

function onChange(value){
    console.log(value);
}

function App() {
    return (
    <Cascader options={options} onChange={onChange}></Cascader>
    )
}

export default App;