import { Point } from "./point";

// @flow

export const CellType = {
    FOOD: 1,
    SNAKE_HEAD: 2,
    SNAKE_SEGMENT: 3,
    WALL: 4,
};

export class Cell {

    _point: Point;
    _type: $Values<CellType>;
    _size: Number;

    constructor(point: Point, type: $Values<CellType>, size: Number) {
        this._point = point;
        this._type = type;
        this._size = size;
    }

    getType(): $Values<CellType> {
        return this._type;
    }

    getPoint(): Point {
        return this._point;
    }

    getSize(): Number {
        return this._size;
    }
}
