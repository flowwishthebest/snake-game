// @flow

let directions = Object.create(null);

directions.NONE = 0;
directions.LEFT = 1;
directions.RIGHT = 2;
directions.UP = 3;
directions.DOWN = 4;

directions = Object.freeze(directions);

export type EDirection = $Values<typeof directions>;
