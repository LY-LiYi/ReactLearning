//加载动画组件
import React from 'react'
import './loading'

class Loading extends React.Component{
    render(){
        return  <div class="loading">
        <div class="load">
          <div class="loader">
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__ball"></div>
          </div>
        </div>
      </div>
    }
}

export default Loading;