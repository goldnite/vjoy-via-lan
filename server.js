const { vJoy, vJoyDevice } = require('vjoy');
const { buttons, axes, POV, axisNames } = require('./const.js');

const DEVICE_ID = 1;
const MAX_AXIS = 0x8000;
const MID_AXIS = 0x4000;
const MIN_AXIS = 0x0001;
let device;

const initializeVJoyDevice = () => {
  if (!vJoy.isEnabled()) {
    console.log('vJoy is not enabled.');
    process.exit();
  }

  let device = vJoyDevice.create(DEVICE_ID);
  new Array(32).forEach((v, i) => {
    device.buttons[i + 1].set(false);
  });
  axisNames.forEach((axis) => {
    device.axes[axis].set(MID_AXIS);
  });
  new Array(4).forEach((v, i) => {
    device.discretePOV[i + 1].set(0);
  });
};

initializeVJoyDevice();
