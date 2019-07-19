import React from 'react';
import GameBoard from './GameBoard'
import GameLogic from '../GameLogic'


class App extends React.Component {
  constructor() {
    super();
    this.gameLogic = new GameLogic(7, 6);


  }

  render () {
    return (
      <div>
        <GameBoard logic={this.gameLogic} />
      </div>
    )
  }
}

export default App;
