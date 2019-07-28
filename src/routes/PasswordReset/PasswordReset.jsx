import React from 'react'
import './PasswordReset.scss';

import { Steps, Form, Icon, Input, Button, message } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import VerifyUser from './VerifyUser.jsx'
import VerifyEmail from './VerifyEmail.jsx'
import PassWord from './PassWord.jsx'
import Done from './Done.jsx'

// import  不进行页面按需加载引入方式 
// webpack require.ensure() 进行页面按需加载引入方式 

const { Step } = Steps;


//进度条
class PasswordResetStep extends React.Component {

    render() {
        return (
            <div className="passSteps">
                <Steps current={this.props.current}>
                    <Step title="验证用户名" icon={<Icon type="user" />} />
                    <Step title="验证注册邮箱" icon={<Icon type="solution" />} />
                    <Step title="输入新密码" icon={<Icon type="warning" />} />
                    <Step title="完成" icon={<Icon type="smile-o" />} />
                </Steps>
            </div>
        )
    }
}

class PasswordReset extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isStep: 0,
            current: 0,
        };
        //绑定this
        this.updateState = this.updateState.bind(this);
    }

    updateState(value) {
        console.log(value);
        this.setState({
            isStep: value,
            current: value,
        });
    }
    render() {
        const { getFieldDecorator, isFieldTouched, getFieldsError } = this.props.form;

        const isStep = this.state.isStep;
        const current = this.state.current;
        // 条件渲染
        let page;
        switch (isStep) {
            // 子组件传值给父组件  将事件传递给子组件
            case 0: page = <VerifyUser updateState={this.updateState} />; break;
            case 1: page = <VerifyEmail updateState={this.updateState} />; break;
            case 2: page = <PassWord updateState={this.updateState} />; break;
            //Router 组件的后代里头才有可能有 this.props.history  将方法传递给子组件
            case 3: page = <Done history={this.props.history}/>; break;
            default: page = <VerifyUser />; break;
        }

        return (
            <div className="passBackDrop">
                <div className="passFrame">
                    <PasswordResetStep current={current} />
                    <div className="passInput">
                        {page}
                    </div>
                </div>
            </div>
        )
    }
}


const PasswordResetFrom = Form.create()(PasswordReset);

export default PasswordResetFrom;

