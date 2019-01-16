import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';


//用户名验证组件
class passVerifyUser extends React.Component {

     //验证用户名
     handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {

        //css样式 去除横杠 大写
        const pass = {
            width: '36rem',
            height: 0,
            display: 'block',
        }
        const p = {
            fontSize: '16px',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '1rem',
        }
        return (
            <div style={pass} >
                 <p style={p}>请输入用户名</p>
                 <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>验证</Button>
                    </FormItem>
                </Form> 
            </div>
           
        )
    }
};

const passVerifyUserForm = Form.create()(passVerifyUser);

export default passVerifyUserForm;