import React from 'react';
import {Button,Menu,Dropdown,Icon} from 'antd';
import 'antd/dist/antd.css';

function handleMenuClick(e){
    console.log('click',e);
    if(e.key === 1){
        console.log("111");
    }else{
        console.log("22222");
    }
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">1st</Menu.Item>
        <Menu.Item key="2">2nd</Menu.Item>
    </Menu>

);

function App() {
    return (
    <div>
        <Button>primary</Button>
        <Button>secondary</Button>
        <Dropdown overlay={menu}>
            <Button>
                Actions <Icon type="down"></Icon>
            </Button>
        </Dropdown>
    </div>
    );
}
export default App;
