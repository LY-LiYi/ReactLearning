import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App.jsx';
import AntTodo from './components/AntTodo.jsx';
//重置默认样式
import './layouts/normalize.css'
import './index.scss';
import './test';

ReactDOM.render(<AntTodo/>, document.getElementById('root'));

