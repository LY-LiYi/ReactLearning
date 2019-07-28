import React from 'react'
import './PasswordReset.scss';

import { Form, Icon, Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';


//用户名验证组件
class VerifyEmail extends React.Component {

    handleSubmitemail = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.email !== undefined) {
                    this.props.updateState(2);
                }
            }
        });
    };

    render() {
        const { getFieldDecorator, isFieldTouched, getFieldsError } = this.props.form;
        return (<div className="passVerifyEmail">
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
        </div>)
    }
};

const VerifyEmailForm = Form.create()(VerifyEmail);

export default VerifyEmailForm;