// @flow
import { Cell } from './cell';

export class Board {

    _width: Number;
    _height: Number;

    constructor(width: Number, height: Number) {
        this._width = width;
        this._height = height;
    }

    getWidth(): Number {
        return this._width;
    }

    getHeight(): Number {
        return this._height;
    }
}
