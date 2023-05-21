const buttons = [
  'X',
  'A',
  'B',
  'Y',
  'LT',
  'RT',
  'LB',
  'RB',
  'ESC',
  'MENU',
  'LS',
  'RS',
];

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

const POV = {
  U: 0,
  R: 1,
  D: 2,
  L: 3,
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
  POV,
  axisNames,
};
