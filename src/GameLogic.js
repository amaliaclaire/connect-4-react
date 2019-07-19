
export default class GameLogic {
  constructor(width, height) {
    this._boardState = [];
    for (let row = 0; row < height; row++) {
      this._boardState[row] = [];
      for (let col = 0; col < width; col++) {
        this._boardState[row][col] = null;
      }
    }
  }

  get boardState() {
    return this._boardState;
  }
}
