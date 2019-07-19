import React from 'react';
import GameBoard from './GameBoard'
import GameLogic from '../GameLogic'


class App extends React.Component {
  constructor() {
    super();
    this.gameLogic = new GameLogic(7, 6);
    /* 1.
    this line will trigger to draw the grid 7 by 6. This line will grab all the methods and put it inside this.gamelogic.
    this.gameLogic will hold all of the methods of gameLogic.
    In my GameLogic constructor a this._width = width && this._height = height; exist aka the 7 & 6 above corresponds to the width and height.
     */


  }

  render () {
    return (
      <div>
        <GameBoard logic={this.gameLogic} />
      </div>
      /* 2.
       I'm displaying Gameboard & passing in the game logic to the gameboard. "passing", means I can make the methods in game logic available to Gameboard. Methods example: drop(), _resetBoard(), _checkFourColors, _checkForWin()
       Next go to "Gameboard.jsx" */
    )
  }
}

export default App;
