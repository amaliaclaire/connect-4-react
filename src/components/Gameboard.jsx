import React from 'react';
import '../index.css';


export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.logic.activePlayer,
      // ^ this is the most up to date state of this player from gameLogic
      board: this.props.logic.boardState,
      inProgress: this.props.logic.inProgress

    };
  }

  render() {
    const logic = this.props.logic;

    const buttons = [];
    for (let i = 0; i < logic.width; i++) {
      buttons.push(<th><button class="myBtn" disabled={!this.state.inProgress} onClick={e => this.drop(logic, i)}>Drop</button></th>)


    }


    console.log('player', this.state.player);


    return (
      <div>
        <a>Current Player {this.state.player}</a>
        <table className="board">
          <tr>
            {buttons}
          </tr>
          {
            this.state.board.map((row, index) => (
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
        <p></p>

        <button onClick={e => this.reset(logic)}>Reset</button>
      </div>
    );
  }

  drop(logic, i) {
    logic.drop(i);
    this.setState({
      player: this.props.logic.activePlayer,
      // we force the state of  ._activePlayer to render to the board
      board: logic.boardState,
      inProgress: this.props.logic.inProgress
    });
    console.log(this.state.player)
  }

  reset(logic) {
    logic.reset();
    this.setState({
      board: logic.boardState,
      inProgress: logic.inProgress
    });
  }
}
