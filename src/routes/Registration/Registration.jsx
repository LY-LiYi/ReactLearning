import React from 'react'
import './Registration.scss'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';

class Registration extends React.Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

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
            <div className="regBackDrop">
                <div className="regFrame">
                    <p>用户注册</p>
                    <div className="regForm">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item
                                {...formItemLayout}
                                label={(
                                    <span>昵称&nbsp;</span>
                                )}
                            >
                                {getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: '请输入你的昵称!', whitespace: true }],
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
                                        type: 'email', message: '输入的邮箱有误!',
                                    }, {
                                        required: true, message: '请输入你的邮箱!',
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
                                        required: true, message: '请输入你的密码!',
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
                                        required: true, message: '请确认你的密码!',
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