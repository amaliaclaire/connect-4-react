import React from 'react';
import { Container, Item, Button} from 'semantic-ui-react'

class GameDescription extends React.Component {
  render () {
    return (
      <Container>
      <Item.Header>Connect Four</Item.Header>
      <div>Connect Four is a game where players take turn dropping colored circles in the top of the board, along different rows.
      The goal is to make a row of 4 circles in a row - straight or diagnol.</div>
      <Button>Restart</Button>



      </Container>
    )
  }
}

export default GameDescription;
