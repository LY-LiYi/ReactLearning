//路由配置文件
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './Login/Login.jsx'
import AntTodo from '../components/AntTodo.jsx'
import Home from './Home/Home.jsx'
import Registration from './Registration/Registration.jsx'
import PasswordReset from './PasswordReset/PasswordReset.jsx'

class BasicRoute extends React.Component {
    // <Router>  的  exact 关键字 独立路由： <Switch> 都是为了模块独立渲染
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/passwordReset" component={PasswordReset} />
                    <Route exact path="/antTodo" component={AntTodo} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </HashRouter >
        );
    }

}


export default BasicRoute;

