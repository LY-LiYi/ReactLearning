import React from 'react'
import './PasswordReset.scss';

import { Steps, Form, Icon, Input, Button, message } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

// import  不进行页面按需加载引入方式 
// webpack require.ensure() 进行页面按需加载引入方式 
import Passverifyuser from './passVerifyUser.jsx';

const Step = Steps.Step;

class PasswordReset extends React.Component {

   

    //验证邮箱
    handleSubmitemail = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    //输入新密码
    handleSubmitPassWord= (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    render() {
        const schedule=0;
        const { getFieldDecorator, isFieldTouched, getFieldsError } = this.props.form;
        // const passwordError = isFieldTouched('password') && getFieldError('password');
        const info = () => {
            message.info('This is a normal message');
        };
        return (
            <div className="passBackDrop">
                <div className="passFrame">
                    <div className="passSteps">
                        <Steps progressDot current={schedule}>
                            <Step title="验证用户名" description="" />
                            <Step title="验证注册邮箱" description="" />
                            <Step title="输入新密码" description="" />
                        </Steps>
                    </div>
                    <div className="passInput">
                        {/* 组件名大写开头 */}
                        <Passverifyuser/>
                        {/* 拆分 */}
                        {/* <div className="passVerifyUser">
                            <p>请输入用户名</p>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', }}  />} placeholder="Username" />
                                    )}
                                </Form.Item>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>验证</Button>
                                </FormItem>
                            </Form>
                        </div> */}
                        <div className="passVerifyEmail">
                            <p>请输入注册邮箱</p>
                            <Form onSubmit={this.handleSubmitemail} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            type: 'email', message: 'The input is not valid E-mail!',
                                        }, {
                                            required: true, message: 'Please input your E-mail!',
                                        }],
                                    })(
                                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                                    )}
                                </Form.Item>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>验证</Button>
                                </FormItem>
                            </Form>
                        </div>
                        <div className="passNewPsaaword">
                            <p className="passwordP">请输入新密码</p>
                            <Form onSubmit={this.handleSubmitPassWord} className="login-form">
                                <p>新密码</p>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" id="passwordone" />
                                    )}
                                </Form.Item>
                                <p>确认新密码</p>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" id="passwordtwo" />
                                    )}
                                </Form.Item>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>确定</Button>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const PasswordResetFrom = Form.create()(PasswordReset);

export default PasswordResetFrom;

