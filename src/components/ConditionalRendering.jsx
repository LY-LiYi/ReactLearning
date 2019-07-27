import React from 'react'

// 条件渲染

class LoginControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    //写箭头函数则不需要在构造器中bind  this
    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutBotton onClick={this.handleLogoutClick} />;
        }
        else {
            button = <LoginBotton onClick={this.handleLoginClick} />;
        }

        

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                <hr/>
                <MailBox  unreadMessages={messages} />
            </div>
        );
    }
}


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuetGreeting(props) {
    return <h1>Please sign up</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    else {
        return <GuetGreeting />;
    }
}

function LoginBotton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutBotton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}


//与运算符
function MailBox(props){
    const unreadMessages=props.unreadMessages;

    return(
        <div>
            <h1>Hello</h1>
            {unreadMessages.length>0 &&
                <h2>
                    you have {unreadMessages.length} unread message
                </h2>
            }
        </div>
    )
}

const messages=['react','re react','re re react']

export default LoginControl;
