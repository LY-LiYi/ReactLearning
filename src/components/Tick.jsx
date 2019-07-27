const React =require('react');


// 无状态组件，展示组件  只有render方法，无state状态 无this 无法访问生命周期 只能接受props
function FormattedDate(props){
    return(
        <h2>{props.date.toLocaleTimeString()}</h2>
    )
}

//有状态组件 容器组件  定义交互逻辑和业务数据
class Clock extends React.Component {

    // 组件类应始终使用props调用基础构造函数。
    constructor(props) {
        super(props);
        //初始化当前时间 构造函数是唯一能够初始化state的地方
        this.state = { date: new Date() };
    
    }
    //生命周期钩子
    //挂载
    componentDidMount() {
        //定时器保存在this中 每一秒调一次tick()
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    //卸载
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //调用setState()
    tick() {
        this.setState({
            date: new Date(),
        })
    }

    //toLocaleTimeString()将data对象转换成字符串
    render() {
        return (
            <div>
                <h1>Hello,world!</h1>
                <FormattedDate  date={this.state.date}/>
            </div>
        )
    }
}


class Tick extends React.Component {

    render() {

        const ticked = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }

        return (
            <div style={ticked}>
                <Clock />,
            </div>
        );
    }
}

export default Tick;