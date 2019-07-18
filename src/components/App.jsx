import React from 'react';

import GameDescription from './GameDescription'
import BoardGame from './BoardGame'

class App extends React.Component {

  render () {
    return (
      <div>
        <GameDescription />
        <BoardGame /> 
      </div>
    )
  }
}

export default App;
