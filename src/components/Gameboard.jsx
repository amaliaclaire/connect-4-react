import React from 'react';
import '../index.css';

const data = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

export default class GameBoard extends React.Component {
  render() {
    return (
      <table>
        {
          data.map((row, index) => (
            <tr key={row[0]}>
            {row.map(cellId => <th key={cellId}>{cellId}</th>)}
            </tr>
          ))
        }
      </table>
    );
  }
}
