//路由配置文件
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './Login/Login.jsx'
import App from './App.jsx'
import AntTodo from '../components/AntTodo.jsx'
import Home from './Home/Home.jsx'
import Registration from './Registration/Registration.jsx'

class BasicRoute extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/antTodo" component={AntTodo} />
                    <Route exact path="/app" component={App} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </HashRouter >
        );
    }

}


export default BasicRoute;

