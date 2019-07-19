import React from 'react';
import '../index.css';


export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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


    return (
      <div>
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

        <button onClick={e => this.reset(logic)}>Reset</button>
      </div>
    );
  }

  drop(logic, i) {
    logic.drop(i);
    this.setState({
      board: logic.boardState,
      inProgress: this.props.logic.inProgress
    });
  }

  reset(logic) {
    logic.reset();
    this.setState({
      board: logic.boardState,
      inProgress: logic.inProgress
    });
  }
}
