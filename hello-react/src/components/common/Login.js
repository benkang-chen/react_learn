import React, { Component } from 'react';
import axios from 'axios';
import '../../style/login.less';
import { Form, Icon, Input, Button, Checkbox, message, Spin } from 'antd';
const FormItem = Form.Item;


async function PatchUser(values) {  //匹配用户
    let state = await
                axios({
                    method: 'post',
                    url: 'http://localhost/quickstart/login',
                    data: {
                        username: values.username,
                        password: values.password
                    }
                }).then(function (response) {
                    let code = response.data.code;
                    console.log('code is :::', code)
                    if (code == 1) {
                        return true;
                    } else {
                        return false;
                    }
                }).catch(function (error) {
                    console.log(error);
                    return false;
                });
    return state
};

class NormalLoginForm extends Component {
    state = {
        isLoding:false,
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                PatchUser(values).then( (res) => {
                    console.log('res:::', res)
                    if(res){
                        this.setState({
                            isLoding: true,
                        });
                        localStorage.setItem('mspa_user',JSON.stringify(values));
                        message.success('login successed!'); //成功信息
                        let that = this;
                        setTimeout(function() { //延迟进入
                            that.props.history.push({pathname:'/home',state:values});
                        }, 2000);

                    }else{
                        message.error('login failed!'); //失败信息
                    }
                })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            this.state.isLoding?<Spin size="large" className="loading" />:
            <div className="login">
                <div className="login-form">
                    <div className="login-logo">
                        <div className="login-name">MSPA</div>
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名 (admin)" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码 (admin)" />
                            )}
                        </FormItem>
                        <FormItem style={{marginBottom:'0'}}>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{float:'right'}}>忘记密码?</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                            Or <a href="">现在就去注册!</a>
                        </FormItem>
                    </Form>
                    <a className="githubUrl" href="https://github.com/zhaoyu69/antd-spa"> </a>
                </div>
            </div>
        );
    }
}

const Login = Form.create()(NormalLoginForm);
export default Login;