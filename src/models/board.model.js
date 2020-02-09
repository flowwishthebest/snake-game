// @flow

import { Cell } from './cell.model';

export class Board {

    _width: number;
    _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    getWidth(): number {
        return this._width;
    }

    getHeight(): number {
        return this._height;
    }
}
