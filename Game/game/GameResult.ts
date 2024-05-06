import Player from '../player/Player';

class GameResult {
  result: string;
  player: Player;
  constructor(result: string, player: Player) {
    this.result = result;
    this.player = player;
  }
}

export default GameResult;
