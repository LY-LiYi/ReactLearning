import React from 'react'
import './PasswordReset.scss';

import { Form, Icon, Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';


//用户名验证组件
class PassWord extends React.Component {

    handleSubmitPassWord = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                    this.props.updateState(3);
            }
        });
    };

    render() {
        const { getFieldDecorator, isFieldTouched, getFieldsError } = this.props.form;
        return (<div className="passNewPsaaword">
            <p className="passwordP">请输入新密码</p>
            <Form onSubmit={this.handleSubmitPassWord} className="login-form">
                <p>新密码</p>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入你的新密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" id="passwordone" />
                    )}
                </Form.Item>
                <p>确认新密码</p>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请再次输入新密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" id="passwordtwo" />
                    )}
                </Form.Item>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>确定</Button>
                </FormItem>
            </Form>
        </div>)
    }
};

const PassWordForm = Form.create()(PassWord);

export default PassWordForm;