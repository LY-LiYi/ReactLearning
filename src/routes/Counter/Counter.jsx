import React, { Component } from 'react';
import {Button } from 'antd';

class Counter extends React.Component {

    
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
       
        return (
            <div className="container" >
                <h1 className="text-center mt-5">{this.state.count}</h1>
                <p className="text-center">
                    <Button  type="primary" onClick={this.handleIncrement} >Increase</Button>
                    <Button type="danger" onClick={this.handleDecrement} >Decrease</Button>
                </p>
            </div>
        );
    }
}

export default Counter