// @flow

const cellTypes = Object.freeze({
    FOOD: 1,
    SNAKE_HEAD: 2,
    SNAKE_SEGMENT: 3,
    WALL: 4,
});

export type ECellType = $Values<typeof cellTypes>;
