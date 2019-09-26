import React from 'react';
import {Layout,Menu,Breadcrumb,Icon} from 'antd';
import 'antd/dist/antd.css';
const {SubMenu} = Menu;
const {Header,Content,Sider} = Layout;

function App() {
    return (
        <Layout>
            <Header className="header">
                <div className="logo"></div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultOpenKeys={['2']}
                    style={{lineHeight:'64px'}}
                >
                    <Menu.Item key="1">nav1</Menu.Item>
                    <Menu.Item key="2">nav2</Menu.Item>
                    <Menu.Item key="3">nav3</Menu.Item>

                </Menu>
            </Header>
            <Layout>
                <Sider width={200} style={{background:'#fff'}}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height:'100%',borderRight:0}}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span><Icon type="user"></Icon>subnav 1</span>
                            }
                        >
                            <Menu.Item key="1">option 1</Menu.Item>
                            <Menu.Item key="2">option 2</Menu.Item>
                            <Menu.Item key="3">option 3</Menu.Item>
                            <Menu.Item key="4">option 4</Menu.Item>

                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span><Icon type="laptop"></Icon>subnav 2</span>
                            }
                        >
                            <Menu.Item key="5">option 5</Menu.Item>
                            <Menu.Item key="6">option 6</Menu.Item>
                            <Menu.Item key="7">option 7</Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout style={{padding:'0 24px 24px'}}>
                    <Breadcrumb style={{margin:'16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        background:'#fff',
                        padding:24,
                        margin:0,
                        minHeight:280,
                    }}></Content>

                </Layout>
            </Layout>
        </Layout>
    )
}

export default App;