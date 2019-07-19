import React from 'react';
import '../index.css';


/* everything in game logic has been passed in and available here through "props" = properties*/

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.logic.activePlayer,
      // ^ this is the most up to date state of this player from gameLogic
      board: this.props.logic.boardState,
      inProgress: this.props.logic.inProgress

      // 3. player, board & in progress are props from gameLogic and displays if the game is "in progress", what the current state of the game & player
    };
  }

  render() {
    const logic = this.props.logic;

    const buttons = [];
    for (let i = 0; i < logic.width; i++) {
      buttons.push(<th><button class="myBtn" disabled={!this.state.inProgress} onClick={e => this.drop(logic, i)}>Drop</button></th>)
      // 4. we render the buttons and make the drop() method the default callback function for each button.
    }

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

    // 5. Where the buttons with onClick functionality will be rendered.
    // Here we map through the board and checks if the cell className is "empty". If it is empty it remains empty, ELSE it turns into className="player cellNumber"
  }

  drop(logic, i) {
    logic.drop(i);
    // 6.this method is the drop() inside gamelogic. After this, there will be a change of the state in the game.
    this.setState({
      // 7. this "setState" will update the state of the board to the most current one.
      player: this.props.logic.activePlayer,
      // we force the state of  ._activePlayer to render to the board
      board: logic.boardState,
      inProgress: this.props.logic.inProgress
    });
  }

// 8. reset the state of the board to the beginning of the game. This discards all game progress. 
  reset(logic) {
    logic.reset();
    this.setState({
      board: logic.boardState,
      inProgress: logic.inProgress
    });
  }
}
