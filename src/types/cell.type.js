// @flow

let cellTypes = Object.create(null);

cellTypes.FOOD = 1;
cellTypes.SNAKE_HEAD = 2;
cellTypes.SNAKE_SEGMENT = 3;
cellTypes.WALL = 4;

cellTypes = Object.freeze(cellTypes);

export type ECellType = $Values<typeof cellTypes>;
