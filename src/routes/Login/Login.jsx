import React from 'react'
import './Login.scss'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends React.Component {
    
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //       if (!err) {
    //         console.log('Received values of form: ', values);
    //       }
    //     });
    //   }
    
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div class="login">
                <div class="loginBox">
                    <p>登录</p>
                    <Form  className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)',minHeight:'none'}} />} placeholder="Username" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                               登录
                            </Button>
                            或者 <a href="">或立即注册</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

// Form.create({})(???)
const LoginForm=Form.create({})(Login);

export default LoginForm;