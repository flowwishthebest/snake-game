// @flow

import { Point } from "./point.model";
import type { EDirection } from '../types';

export class Snake {

    _head: Point;
    _initialSize: Number;
    _direction: EDirection;
    _tail: Array<Point>;

    constructor(
        head: Point,
        initialSize: Number,
        direction: EDirection,
    ) {
        this._head = head;
        this._initialSize = initialSize;
        this._direction = direction;
        this._tail = [head];
    }
}
