import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/index';
//重置默认样式
import './layouts/normalize.css'
import './index.scss';
import './test';

ReactDOM.render(<Router/>, document.getElementById('root'));

