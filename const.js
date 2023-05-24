const buttons = {
  X: 1,
  A: 2,
  B: 3,
  Y: 4,
  LT: 5,
  RT: 6,
  LB: 7,
  RB: 8,
  ESC: 9,
  MENU: 10,
  LS: 11,
  RS: 12,
};

const axes = {
  LSU: 'Y',
  LSL: 'X',
  LSD: 'Y',
  LSR: 'X',
  RSU: 'Ry',
  RSL: 'Rx',
  RSD: 'Ry',
  RSR: 'Rx',
};
const POVs = {
  U: 0,
  L: 3,
  D: 2,
  R: 1,
};

const axisNames = [
  'X',
  'Y',
  'Z',
  'Rx',
  'Ry',
  'Rz',
  'Slider0',
  'Slider1',
  'Wheel',
  'POV',
];

module.exports = {
  buttons,
  axes,
  POVs,
  axisNames,
};

const preferredKeyMap = {
  X: 'KeyA', // kick
  A: 'KeyS', // pass
  B: 'KeyD', // loft pass
  Y: 'KeyW', // through pass
  LT: 'KeyZ',
  RT: 'KeyC',
  LB: 'KeyQ',
  RB: 'KeyE',
  ESC: 'KeyR',
  MENU: 'KeyB',
  LS: 'Digit1',
  RS: 'Digit2',
  LSU: 'KeyI',
  LSL: 'KeyJ',
  LSD: 'KeyK',
  LSR: 'KeyL',
  RSU: 'KeyT',
  RSL: 'KeyF',
  RSD: 'KeyV',
  RSR: 'KeyG',
  U: 'ArrowUp',
  L: 'ArrowLeft',
  D: 'ArrowDown',
  R: 'ArrowUpRight',
};
