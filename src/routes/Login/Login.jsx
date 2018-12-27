import React from 'react'
import { withRouter } from 'react-router-dom';
import './Login.scss'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.history.push('../Home');
            }
        });
    }

    //路由跳转 withRouter高阶组件 使用history   官方推荐方法
    handleForgetPass=()=>{
        this.props.history.push("../PasswordReset");
    }

    handleRes=()=>{
        this.props.history.push("../Registration");
    }

    render() {
        
        //在render里面定义变量 render外定义方法
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="loginBackDrop">
                <div className="loginFrame">
                    <p>用户登录</p>
                    <div className="loginForm">
                        <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: '300px' }}>
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', minHeight: 'none' }} />} placeholder="Username" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>自动登录</Checkbox>
                                )}
                                <span  onClick={this.handleForgetPass} className="login-form-forgot" style={{ float: 'right', color:'#1890ff',cursor:'pointer'}} >忘记密码</span>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                                    登录
                                </Button>
                                或者者 <span onClick={this.handleRes} style={{ color:'#1890ff',cursor:'pointer'}}>立即注册</span>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </div>
        );
    }
}



const LoginForm = Form.create()(Login);

export default LoginForm;