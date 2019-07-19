import React from 'react';
import '../index.css';


export default class GameBoard extends React.Component {

  render() {
    const logic = this.props.logic;
    return (
      <table>
        {
          logic.boardState.map((row, index) => (
            <tr key={index}>
            {row.map((cell, index) => <th key={index}>X</th>)}
            </tr>
          ))
        }
      </table>
    );
  }
}
