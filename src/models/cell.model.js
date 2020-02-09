// @flow

import { Point } from './point.model';
import type { ECellType } from '../types';

export class Cell {

    _point: Point;
    _type: ECellType;
    _size: Number;

    constructor(point: Point, type: ECellType, size: Number) {
        this._point = point;
        this._type = type;
        this._size = size;
    }

    getType(): ECellType {
        return this._type;
    }

    setType(type: ECellType): this {
        this._type = type;

        return this;
    }

    getPoint(): Point {
        return this._point;
    }

    getSize(): Number {
        return this._size;
    }
}
