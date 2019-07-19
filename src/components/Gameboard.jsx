import React from 'react';
import '../index.css';


export default class GameBoard extends React.Component {

  render() {
    const logic = this.props.logic;

    const buttons = [];
      for (let i = 0; i < logic.width; i++) {
        buttons.push(<th><button class="myBtn" onclick={logic.drop(i)}>Drop</button></th>)

      }

    return (
      <table className="board">
        <tr>
          {buttons}

        </tr>
        {
          logic.boardState.map((row, index) => (
            <tr key={index}>
              {
                row.map((cell, index) =>
                  <td  className={cell === null ? 'empty' : `player${cell}`} key={index}>
                  </td>
                )
              }
            </tr>
          ))
        }
      </table>
    );
  }
}
