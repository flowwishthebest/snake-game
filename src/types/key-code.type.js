// @flow

let keyCodes = Object.create(null);

keyCodes.ARROW_UP = 38;
keyCodes.ARROW_DOWN = 40;
keyCodes.ARROW_LEFT = 37;
keyCodes.ARROW_RIGHT = 39;

keyCodes = Object.freeze(keyCodes);

export type EKeyCode = $Values<typeof keyCodes>;
