import React from 'react';
import {Layout,Menu,Breadcrumb} from 'antd';
import 'antd/dist/antd.css';
const {Header,Content,Footer} = Layout;

function App(){
    return (
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight:'64px'}}
                >
                    <Menu.Item key="1">nav1</Menu.Item>
                    <Menu.Item key="2">nav2</Menu.Item>
                    <Menu.Item key="3">nav3</Menu.Item>

                </Menu>
            </Header>
            <Content style={{padding:'0 50px'}}>
                <Breadcrumb style={{margin:'16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{background:'#fff',padding:24,minHeight:200}}>Content</div>

            </Content>
            <Footer style={{textAlign:'center'}}>Ant Design</Footer>

        </Layout>
    )
}

export default App;