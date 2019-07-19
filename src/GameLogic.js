
export default class GameLogic {
    static DIRECTIONS = [
    {i: 1, j: 0}, //Horizontal
    {i: 0, j: 1}, //Vertical
    {i: 1, j: 1}, // Diagonal
    {i: -1, j: 1} // Other diagonal
  ];

  constructor(width, height) {
    this._width = width;
    this._height = height;

    this._activePlayer = 0;
    this._inProgress = true;

    this._resetBoard();
  }

  _resetBoard() {
    this._boardState = [];
    for (let row = 0; row < this._height; row++) {
      this._boardState[row] = [];
      for (let col = 0; col < this._width; col++) {
        this._boardState[row][col] = null;
      }
    }
  }

  get width() {
    return this._width;
  }

  get inProgress() {
    return this._inProgress;
  }

  get boardState() {
    return this._boardState;
  }

  drop(col) {
    for (let row=this._height - 1; row>=0; row--) {
      if (this._boardState[row][col] === null) {
        this._setCell(col, row, this._activePlayer);
        const winningLine = this._checkForWin(this._activePlayer);

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

  get activePlayer () {
    return this._activePlayer;
    // this._activePlayer state is up to date to showcase which player "won"
  }



  reset() {
    this._inProgress = true;
    this._resetBoard();
  }

  _checkForWin(color) {
    // from each cell in the grid, we check for 4 in a row for each direction aka horizontal, diagonal, vertical
    // x & y are coordinate axis
    for (let y = 0; y < this._height; y++) {
      for (let x = 0; x < this._width; x++) {
        for (let direction of GameLogic.DIRECTIONS) {
          // console.log(direction);
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


    // offset shows how many colors need to equal 4 to "win".
    for (let offset = 0; offset < 4; offset++ ) {
      const checkX = startX + offset * direction.i;
      const checkY = startY + offset * direction.j;

      if(checkX < 0 || checkX >= this._width || checkY < 0 || checkY >= this._height ) {
        win = false;
        break;
      }

      if(this._boardState[checkY][checkX] !== color) {
        win = false;
        break;
      }
    }
    // console.log('win', win);
    // win is displayed here 'now render which player has 'won' here maybe with a function
    return win;
  }

  _setCell(x, y, player) {
    this._boardState = this._boardState.map(row => Array.from(row));
    this._boardState[y][x] = player;
  }
}
