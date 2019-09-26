import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';

/**
 * Button+icon+shape
 * 
 */
function buttons(){
    return (
        <div>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Button type="link">link</Button>
            <br></br>
            <Button type="primary" shape="circle" icon="search" size="large">Primary</Button>
            <Button type="primary" shape="circle">Primary_Shape</Button>
            <Button shape="circle"  icon="search" size="small">Seach_Circle</Button>
            <Button type="primary" icon="search" size="small">Primary_Seach</Button>
        </div>

    );
}
export default buttons;
