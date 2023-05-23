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
  LSU: 'Y-',
  LSL: 'X-',
  LSD: 'Y+',
  LSR: 'X+',
  RSU: 'Ry-',
  RSL: 'Rx-',
  RSD: 'Ry+',
  RSR: 'Rx+',
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
  axisNames,
};
