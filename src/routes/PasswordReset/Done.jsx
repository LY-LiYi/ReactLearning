import React from 'react'


import { Result, Icon, Button } from 'antd';


//用户名验证组件
class Done extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 3,
        };
    }

    //组件已经渲染到页面上
    componentDidMount() {

        // var setTime = setInterval(function () {
        //     let  timer=3;
        //     this.setState({ time: --timer });
        // }, 1000)
    }

    componentWillUnmount() {
    }

    goHome = () => {
       this.props.history.push("/login");
    }

    render() {
        return (
            <div>
                <Result
                    icon={<Icon type="smile" theme="twoTone" />}
                    title="修改密码成功！"
                    extra={[
                        <Button type="primary" key="console" onClick={this.goHome}>回到首页</Button>
                    ]}
                />
                <h2>请稍后，将在{this.state.time}秒后跳转至登录页</h2>
            </div>
        )
    }
};


export default Done;