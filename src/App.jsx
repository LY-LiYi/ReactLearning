import React from 'react'
import './App.scss'
import {Loading} from './components/loading.jsx'


class App extends React.Component {
    render() {
        return <div class="App">
            <h1>Hello React & Webpack !</h1>
            <ul>
                {
                    ['a', 'b', 'c'].map((name,index) => <li key={index}>{`im ${name}`}</li>)
                }
            </ul>
        </div>
    }
}
                  
export default  App;