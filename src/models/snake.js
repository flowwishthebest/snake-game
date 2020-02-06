// @flow

import { Point } from "./point";
import { EDirection } from '../directions';

export class Snake {

    _head: Point;
    _initialSize: Number;
    _direction: $Values<EDirection>;
    _tail: Array<Point>;

    constructor(
        head: Point,
        initialSize: Number,
        direction: $Values<EDirection>,
    ) {
        this._head = head;
        this._initialSize = initialSize;
        this._direction = direction;
        this._tail = [head];
    }
}
