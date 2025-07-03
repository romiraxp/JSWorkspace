import loadGame, { GameSavingData as saveGame, readGameSaving, writeGameSaving } from './game.js'

const game = new loadGame();
game.start();

console.log('app worked')