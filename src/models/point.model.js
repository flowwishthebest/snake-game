// @flow

// smalles pieces of logic
export class Point {

    _x: number;
    _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    getX(): number {
        return this._x;
    }

    getY(): number {
        return this._y;
    }
}
