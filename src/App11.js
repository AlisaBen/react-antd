import React from 'react';
import 'antd/dist/antd.css';
import {Breadcrumb,Icon,Alert} from 'antd';
import {Router,Route,Link} from 'react-router';

function App() {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application list</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An application</Breadcrumb.Item>
            </Breadcrumb>
            <br/>
            <Breadcrumb>
                <Breadcrumb.Item><Icon type="home"></Icon></Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Icon type="user"></Icon>
                    <a href="">Application center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application list</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An application</Breadcrumb.Item>
            </Breadcrumb>
        </div>


    )
}

export default App;