//路由配置文件
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './Login/Login.jsx'
import Home from './Home/Home.jsx'
import Registration from './Registration/Registration.jsx'
import PasswordReset from './PasswordReset/PasswordReset.jsx'
import Counter from './Counter/Counter.jsx';

import AntTodoTest from '../components/AntTodoTest.jsx'
import Tic from '../components/Tic.jsx';
import Tick from '../components/Tick.jsx';
import ConditionalRendering from '../components/ConditionalRendering.jsx';
import LoopRendering from '../components/LoopRendering.jsx';
import Emeet from '../components/Emeet.tsx';
import App from '../components/App.jsx'


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
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/counter" component={Counter} />

                    <Route exact path="/antTodoTest" component={AntTodoTest} />
                    <Route exact path="/tic" component={Tic} />
                    <Route exact path="/tick" component={Tick} />
                    <Route exact path="/conditionalRendering" component={ConditionalRendering} />
                    <Route exact path="/looprendering" component={LoopRendering} />
                    <Route exact path="/emeet" component={Emeet} />
                    <Route exact path="/app" component={App} />
                </Switch>
            </HashRouter >
        );
    }

}


export default BasicRoute;

