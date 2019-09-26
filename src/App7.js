import React from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
const {Header,Footer,Sider,Content} = Layout;

function App() {
    return (
        <div>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
            <br></br><br></br>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            <br></br><br></br>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            <br></br><br></br>
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>

        </div>
    )
}

export default App;

