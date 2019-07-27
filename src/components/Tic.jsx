import React from 'react';

import './Tic.scss';

//井字棋游戏

//Square代表一个单独的button组件
//组件之间的传值 props
// class Square extends React.Component {

//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

//组件名要大写   简化后的函数式定义组件(无状态组件，展示组件)  
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}




class Board extends React.Component {

  //渲染一个格子按钮
  renderSquare(i) {
    //传递一个事件处理函数到square组件里面
    return <Square
      value={this.props.squares[i]}
      // Board 传递了 onClick={() => this.handleClick(i)} 给 Square，
      // 所以当 Square 中的事件处理函数触发时，其实就是触发的 Board 当中的 this.handleClick(i) 方法。
      onClick={() => this.props.onClick(i)}
    />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

//判断获胜的方法
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber:0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history=this.state.history.slice(0,this.state.stepNumber+1);
    const current=history[history.length-1];

    //slice() 浅拷贝了原数组 防止对已有数据的改变
    const squares = current.squares.slice();
    // 当前方格内已经落子/有一方获胜就就无法继续
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    //将新数组传递给state
    this.setState({
      history:history.concat([{
          squares: squares,
      }]),
      stepNumber:history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber:step,
      xIsNext:(step%2)===0,
    })
  }

  render() {
    //获取最近一步的历史记录，以及计算游戏进行的状态
    const history=this.state.history;
    const current=history[this.state.stepNumber];
    const winner=calculateWinner(current.squares);
    
     const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'winner：' + winner;
    }
    else {
      status = 'Next player：' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
          <Board 
           squares={current.squares}
           onClick={(i)=>this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
}

export default Game;