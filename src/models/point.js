// @flow

export class Point {
    _x: Number;
    _y: Number;

    constructor(x: Number, y: Number) {
        this._x = x;
        this._y = y;
    }

    getX(): Number {
        return this._x;
    }

    getY(): Number {
        return this._y;
    }
}
