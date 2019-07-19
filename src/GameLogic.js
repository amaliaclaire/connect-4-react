
export default class GameLogic {
    static DIRECTIONS = [
    {i: 1, j: 0}, //Horizontal
    {i: 0, j: 1}, //Vertical
    {i: 1, j: 1}, // Diagonal
    {i: -1, j: 1} // Other diagonal
  ];

  // 9. shows the x & y axis of the gameboard grid. This is where we're trying to figure out the direction of the move. Used static as it is not the 'instance' of this particular class. ^ This static will not change.


  constructor(width, height) {
    this._width = width;
    this._height = height;

    this._activePlayer = 0;
    this._inProgress = true;

    this._resetBoard();
  }

  // 10. When the game is loaded, the construtor will be loaded automatically.

  _resetBoard() {
    this._boardState = [];
    for (let row = 0; row < this._height; row++) {
      this._boardState[row] = [];
      for (let col = 0; col < this._width; col++) {
        this._boardState[row][col] = null;
      }
    }
  }

  // 11. This resets/redraws the state of the board

  get width() {
    return this._width;
  }

  get inProgress() {
    return this._inProgress;
  }

  get boardState() {
    return this._boardState;
  }

  // 11. shaky with this ^ "get"
  // this will bind the method, therefore it will bind this method to this particular property of the class. Thus, when we look outside of this property, we are able to access it. It will automatically invoke this method.
  // It's helpful, because this "get" will force the most up to date information.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get


  drop(col) {
    for (let row=this._height - 1; row>=0; row--) {
      if (this._boardState[row][col] === null) {
        // ^ Board state is an Array, since it is empty/null it proceed forward with the if function. If there is no actions on the board, the player has free range.
        this._setCell(col, row, this._activePlayer);
        // this puts the color of the active player in that particular row. This jumps to the method of setCell()
        const winningLine = this._checkForWin(this._activePlayer);
        // shows the winningLine -- and jumps to the method of _checkForWin()


        if (winningLine) {
          alert(`player ${this._activePlayer} has won`);
          this._inProgress = false;
          return;
        }

        this._activePlayer = this._activePlayer ? 0 : 1;
        // this lines means if it is falsey - if it's truthy set it to 0
        // console.log('this._activePlayer', this._activePlayer);
        return
      }
    }
  }

  //12. The drop() method makes sure that the players "moves" are not outside the grid row. Thus why I left the the row to be row=this._height - 1
  //

  get activePlayer () {
    return this._activePlayer;
    //13.  this._activePlayer state is up to date to showcase which player "won"
  }



  reset() {
    this._inProgress = true;
    this._resetBoard();
  }
  // 14. resets the board & progress.

  _checkForWin(color) {
    // 15.from each cell in the grid, we check for 4 in a row for each direction aka horizontal, diagonal, vertical
    // x & y are coordinate axis
    for (let y = 0; y < this._height; y++) {
      for (let x = 0; x < this._width; x++) {
        for (let direction of GameLogic.DIRECTIONS) {
          // We're checking for the winning directions (through color). When we click on the cell, it will invoke this method "_checkForWin", it will check from that move from every direction to see if there is a winning move -- a total of 4.
          if (this._checkFourColors(color, x, y, direction)) {
            return {
              x: x,
              y: y,
              direction: direction
            }
          }
        }
      }
    }
    return null;
  }

  // when you see "i" use direction.i and direction.j

   _checkFourColors (color, startX, startY, direction) {
    let win = true;


    // 16. offset shows how many colors need to equal 4 to "win".
    for (let offset = 0; offset < 4; offset++ ) {
      const checkX = startX + offset * direction.i;
      const checkY = startY + offset * direction.j;

      if(checkX < 0 || checkX >= this._width || checkY < 0 || checkY >= this._height ) {
        win = false;
        break;
        // this is checking for the loosing condition
      }

      if(this._boardState[checkY][checkX] !== color) {
        win = false;
        break;
        // this is checking for the loosing condition
      }
    }
    // console.log('win', win);
    // win is displayed here 'now render which player has 'won' here maybe with a function
    return win;
  }

// 17. change the color of the cell to the current players color. 
  _setCell(x, y, player) {
    this._boardState = this._boardState.map(row => Array.from(row));
    this._boardState[y][x] = player;
  }
}
