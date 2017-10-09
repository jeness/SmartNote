import React from 'react'
import { Layout, Menu, Tabs, Form, Message } from 'antd'
import LoginTab from '../../components/LoginTab';
import RegisterTab from '../../components/RegisterTab';
const { Header, Content, Footer } = Layout
const TabPane = Tabs.TabPane;
class App extends React.Component {
    handleClick = (item) => {
        const path = item.key;
        location.href = path;
    }
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        onClick={this.handleClick}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="/home">login</Menu.Item>
                        <Menu.Item key="/main">article</Menu.Item>
                        <Menu.Item key="/editor">editor</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Tabs defaultActiveKey="1" size="small">
                            <TabPane tab="Sign in" key="1">
                                <LoginTab />
                            </TabPane>
                            <TabPane tab="Sign up" key="2">
                                <RegisterTab />
                            </TabPane>
                        </Tabs>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    SmartNote ©2017 Created by Augo
                </Footer>
            </Layout>
        )
    }

}


export default Form.create()(App);