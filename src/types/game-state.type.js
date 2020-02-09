// @flow

let gameStates = Object.create(null);

gameStates.PAUSED = 0;
gameStates.GAME_OVER = 1;
gameStates.RUNNING = 2;

gameStates = Object.freeze(gameStates);

export type EGameState = $Values<typeof gameStates>;
