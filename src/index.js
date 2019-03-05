import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/index';
import { Provider } from 'react-redux';
import store from './store/store' 
//重置默认样式
import './styles/normalize.css'
import './index.scss';

// React-Redux 提供Provider组件，可以让容器组件拿到state
// Provider在根组件外面包了一层，这样一来，Router的所有子组件就默认都可以拿到state
ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));

