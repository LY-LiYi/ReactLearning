import React from 'react'
import '../../layouts/Block.scss'
import './Registration.scss'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';

class Registration extends React.Component {

    render() {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };

        return (
            <div className="backdrop">
                <div className="frame">
                    <p>用户注册</p>

                    <div className="form">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item
                                {...formItemLayout}
                                label={(
                                    <span>昵称&nbsp;</span>
                                )}
                            >
                                {getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                                })(
                                    <Input style={{ width: '90%', }} />
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="邮箱"
                            >
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                        required: true, message: 'Please input your E-mail!',
                                    }],
                                })(
                                    <Input style={{ width: '90%', }} />
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="密码"
                            >
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: 'Please input your password!',
                                    }, {
                                        validator: this.validateToNextPassword,
                                    }],
                                })(
                                    <Input type="password" style={{ width: '90%', }} />
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="确认密码"
                            >
                                {getFieldDecorator('confirm', {
                                    rules: [{
                                        required: true, message: 'Please confirm your password!',
                                    }, {
                                        validator: this.compareToFirstPassword,
                                    }],
                                })(
                                    <Input type="password" onBlur={this.handleConfirmBlur} style={{ width: '90%' }} />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ width: '90%', marginLeft: '5%',}}>注册</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const RegistrationForm = Form.create()(Registration);
export default RegistrationForm;