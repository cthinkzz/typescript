import Board from '../board/Board';
import TicTacToeBoard from '../board/TicTacToeBoard';
import Player from '../player/Player';
import GameResult from './GameResult';

class GameEngine {
  setPlayer(symbol: string): Player {
    return new Player(symbol);
  }

  setBoard(type: string): Board {
    if (type === 'TicTacToe') {
      return new TicTacToeBoard();
    }
    throw new Error('Invlaid Board Type');
  }

  gameResult(board: Board): GameResult {
    if (board instanceof TicTacToeBoard) {
      // Check rows
      for (let i = 0; i < 3; i++) {
        if (
          board.cells[i][0] !== null &&
          board.cells[i][0] === board.cells[i][1] &&
          board.cells[i][1] === board.cells[i][2]
        ) {
          return new GameResult('completed', new Player(board.cells[i][1]));
        }
      }

      // Check columns
      for (let j = 0; j < 3; j++) {
        if (
          board.cells[0][j] !== null &&
          board.cells[0][j] === board.cells[1][j] &&
          board.cells[1][j] === board.cells[2][j]
        ) {
          return new GameResult('completed', new Player(board.cells[1][j]));
        }
      }

      // Check diagonals
      if (
        board.cells[0][0] !== null &&
        board.cells[0][0] === board.cells[1][1] &&
        board.cells[1][1] === board.cells[2][2]
      ) {
        return new GameResult('completed', new Player(board.cells[1][1]));
      }
      if (
        board.cells[0][2] !== null &&
        board.cells[0][2] === board.cells[1][1] &&
        board.cells[1][1] === board.cells[2][0]
      ) {
        return new GameResult('completed', new Player(board.cells[1][1]));
      }

      //check if all cells are filled or not
      let completed = true;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++)
          if (!board.cells[i][j]) {
            completed = false;
            break;
          }
      }

      if (completed) {
        return new GameResult('draw', new Player('-'));
      }
      return new GameResult('pending', new Player('-'));
    }
    return new GameResult('', new Player(''));
  }
}

export default GameEngine;
