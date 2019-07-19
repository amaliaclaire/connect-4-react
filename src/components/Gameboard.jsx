import React from 'react';
import './components/index.css';
import Square from './Square.jsx';


export default class Board extends React.Component {
  renderSquare(i, squareShade) {
    return <Square
      style={this.props.squares[i] ? this.props.squares[i].style : null}
      shade={squareShade}
      onClick={() => this.props.onClick(i)}
    />
  }

  render() {
      const board = [];
      for(let i = 0; i < 6; i++){
        const squareRows = [];
        for(let j = 0; j < 5; j++){
          const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
          squareRows.push(this.renderSquare((i*6)+ j, squareShade));
        }
        board.push(<div className="board-row">{squareRows}</div>)
      }

      return (
        <div>
          {board}
        </div>
      );
    }
  }


function isEven(num){
  return num % 2 == 0
}
