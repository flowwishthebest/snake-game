// @flow

export const GameState = Object.freeze({
    PAUSED: 0,
    GAME_OVER: 1,
    RUNNING: 2,
});

export class Game {
    _state: $Values<typeof GameState>;

    constructor() {
        this._state = GameState.RUNNING;
    }
}
