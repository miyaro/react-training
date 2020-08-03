import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//React.Componentを継承したクラス(コンポーネント)を定義する。Reactではクラス、関数をコンポーネントとして定義することができる。
//Component: jsの関数的なもの。任意の入力値(props)を受け取り表示するReact要素を記述する。

//関数型コンポーネントに変更。renderメソッドだけをもってstateを持たないコンポーネントにできる。
function Square(props){
    //renderはReact.Componentのサブクラスでは絶対にいるメソッド。htmlの描画ができないから意味ないクラスになってしまうからだと思われ。
    //html要素を返す
    //stateの値(value:X)をセットする。
    return (
      <button
        className="square"
        //関数型コンポーネントはthis使わない。クラスじゃないからそりゃそうか。
        onClick={() => props.onClick()}
      >
        {props.value}
      </button>
    );
}
  
  class Board extends React.Component {
    //classの初期化。constructor内で引数としてpropsをとる。
    constructor(props) {
        super(props);
        this.state = {
            //nullで固定値設定
            squares: Array(9).fill(null),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares})
    }

    renderSquare(i) {
    //たぶんこのSquareタグみたいなやつでSquareコンポーネントに値を渡している。
      return (
        <Square
            value={this.state.squares[i]}
            onClick = {() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
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
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  