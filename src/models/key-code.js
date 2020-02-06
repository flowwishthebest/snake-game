// @flow

const keyCodes = Object.freeze({
    ARROW_UP: 38,
    ARROW_DOWN: 40,
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39,
});

export type EKeyCode = $Values<typeof keyCodes>;
