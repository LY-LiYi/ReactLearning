import React from 'react'
import './PasswordReset.scss';

import { Form, Icon, Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';


//用户名验证组件
class VerifyUser extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.userName !== undefined) {
                    this.props.updateState(1);
                }
            }
        });
    };

    render() {
        const { getFieldDecorator, isFieldTouched, getFieldsError } = this.props.form;
        return (<div className="passVerifyUser">
            <p>请输入用户名</p>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入你的用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', }} />} placeholder="用户名" />
                    )}
                </Form.Item>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>验证</Button>
                </FormItem>
            </Form>
        </div>)
    }
};

const VerifyUserForm = Form.create()(VerifyUser);

export default VerifyUserForm;