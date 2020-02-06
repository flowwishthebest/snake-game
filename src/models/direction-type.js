// @flow

const directions = Object.freeze({
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
    DOWN: 4,
});

export type EDirection = $Values<typeof directions>;
