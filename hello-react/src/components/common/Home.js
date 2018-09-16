import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon ,Carousel} from 'antd';
import {Redirect, Route, Switch, Link} from 'react-router-dom';
import '../../style/index.less'
import noMatch from './404';
import Modify from "./Modify";
import HomePage from "./HomePage";
import Order from "./Order";
import Card from "./Card";
import Express from "./Express";
const { Header, Content, Footer } = Layout;
const headerStyle = { background: 'transparent', padding: 0 ,width: "100%"}
const menuStyle = { lineHeight: '64px' ,width: "100%" , background: 'transparent', padding: 0}
const itemStyle = {marginLeft: 15,textAlign:'center', background: 'transparent', padding: 0, width: "18%", padding: 0}

class Home extends Component {
    render() {
        return (
            <Layout style={{height: '100%', width: "100%"}}>
                <div>
                    <div className="pic">
                        <Carousel  autoplay>
                            <div className="pic1">&nbsp;</div>
                            <div className="pic2">&nbsp;</div>
                        </Carousel>
                    </div>
                </div>
                <Header className="header" style={headerStyle}>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={menuStyle}
                    >
                        <Menu.Item key="1" style={itemStyle}><Link to={"/home"}><span>首页</span></Link></Menu.Item>
                        <Menu.Item key="2" style={itemStyle}><Link to={"/home/order"}><span>提货</span></Link></Menu.Item>
                        <Menu.Item key="3" style={itemStyle}><Link to={"/home/modify"}><span>订单信息更改</span></Link></Menu.Item>
                        <Menu.Item key="4" style={itemStyle}><Link to={"/home/card"}><span>卡券状态查询</span></Link></Menu.Item>
                        <Menu.Item key="5" style={itemStyle}><Link to={"/home/express"}><span>快递查询</span></Link></Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Layout style={{ background: 'transparent', padding: 0 ,width: "100%"}}>
                        <Content style={{ background: 'transparent', padding: 24, margin: 0, minHeight: 300 ,width: "100%"}}>
                            <Switch>
                                <Route exact path={'/'} component={HomePage} />
                                <Route exact path={'/home'} component={HomePage} />
                                <Route exact path={'/home/order'} component={Order} />
                                <Route exact path={'/home/modify'} component={Modify} />
                                <Route exact path={'/home/card'} component={Card} />
                                <Route exact path={'/home/express'} component={Express} />
                                <Route component={noMatch} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}
export default Home;