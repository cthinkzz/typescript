import TicTacToeBoard from './board/TicTacToeBoard';
import GameEngine from './game/GameEngine';
import Player from './player/Player';

function main() {
  const game: GameEngine = new GameEngine();
  const board: TicTacToeBoard = game.setBoard('TicTacToe') as TicTacToeBoard;
  const player1: Player = game.setPlayer('O');
  const player2: Player = game.setPlayer('X');

  while (game.gameResult(board).result === 'pending') {
    board.makeMove(player1, { row: 0, column: 0 });
    console.log(game.gameResult(board));
    board.makeMove(player2, { row: 1, column: 1 });
    console.log(game.gameResult(board));
    board.makeMove(player1, { row: 0, column: 2 });
    console.log(game.gameResult(board));
    board.makeMove(player2, { row: 0, column: 1 });
    console.log(game.gameResult(board));
    board.makeMove(player1, { row: 1, column: 0 });
    console.log(game.gameResult(board).result);
    board.makeMove(player2, { row: 2, column: 1 });
    console.log(game.gameResult(board));

    // board.makeMove(player2, { row: 2, column: 2 });
    // console.log(game.gameResult(board).result);
    // board.makeMove(player1, { row: 2, column: 1 });
    // console.log(game.gameResult(board).result);
    // board.makeMove(player2, { row: 2, column: 0 });
    // console.log(game.gameResult(board).result);
    // board.makeMove(player1, { row: 1, column: 2 });
    // console.log(game.gameResult(board).result);
  }
  console.log(board.toString());
}

main();
