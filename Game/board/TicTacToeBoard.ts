import Player from '../player/Player';
import Board from './Board';
import Move from './Move';

class TicTacToeBoard extends Board {
  cells: string[][];

  constructor() {
    super();
    this.cells = new Array(3).fill(null).map(() => new Array(3).fill(null));
  }

  makeMove(player: Player, move: Move): void {
    console.log(
      `Reserving ${move.row} & ${move.column} move for Player ${player.symbol}`
    );
    this.cells[move.row][move.column] = player.symbol;
  }

  toString(): string {
    let boardString = '';
    this.cells.forEach((row) => {
      row.forEach((cell) => {
        boardString += (cell === null ? '-' : cell) + ' ';
      });
      boardString += '\n'; // Add a newline after each row
    });
    return boardString;
  }
}

export default TicTacToeBoard;
