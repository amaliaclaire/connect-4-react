import React from 'react';
import { Grid, Button, Card } from 'semantic-ui-react'

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
      buttons.push(<th><Button basic color='black' class="myBtn" disabled={!this.state.inProgress} onClick={e => this.drop(logic, i)}>Drop</Button></th>)
      // 4. we render the buttons and make the drop() method the default callback function for each button.
    }

    return (
      <div>
        <h1 className="Connect4-Title">Connect4</h1>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <table className="board">
            <tr>
              {buttons}
            </tr>
            {
              this.state.board.map((row, index) => (
                <tr key={index}>
                  {
                    row.map((cell, index) =>
                      <td className="board_square">

                      <td className={cell === null ? 'empty piece' : `player${cell} piece`}  key={index}></td>


                      </td>
                    )
                  }
                </tr>
              ))
            }
          </table>
          </Grid.Column>
          <Grid.Column>

          <Card>
            <Card.Content header='How To Play' />
            <Card.Content className="card-explanation">
            <p>
                Do you go up, to the side, or diagonally? Start in the middle or at the edge? It's your choice in Connect 4 Game. Stack the 4 discs vertically, line them up side to side, or go on the diagonal. As long as you get 4-in-a-row, you win. Stay one step ahead of your opponent and block their attempts to get to 4-in-a-row first. Play all 3 Connect 4 games, and crush the competition!
                </p>
            </Card.Content>
          </Card>

          </Grid.Column>
        </Grid.Row>
      </Grid>
        <a>Current Player {this.state.player}</a>

        <p></p>

        <Button basic color='red' onClick={e => this.reset(logic)}>Reset</Button>
      </div>
    );

    // for each cell you attach a .piece to it.


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
// *** go to GameLogic.jsx
  reset(logic) {
    logic.reset();
    this.setState({
      board: logic.boardState,
      inProgress: logic.inProgress
    });
  }
}
