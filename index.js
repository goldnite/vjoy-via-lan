var express = require('express');
var path = require('path');
const { WebSocketServer } = require('ws');
const { vJoy, vJoyDevice } = require('vjoy');
const { buttons, axes, POVs, axisNames } = require('./const.js');
require('dotenv').config();

const MAX_AXIS = 0x8000;
const MID_AXIS = 0x4000;
const MIN_AXIS = 0x0001;

let app = express();
app.use(express.static(path.join(__dirname, 'public')));

let device;

const initializeVJoyDevice = () => {
  if (!vJoy.isEnabled()) {
    console.log('vJoy is not enabled.');
    process.exit();
  }

  device = vJoyDevice.create(parseInt(process.env.DEVICE_ID));
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

const main = async () => {
  initializeVJoyDevice();
  const httpServer = app.listen(process.env.HTTP_PORT, () => {
    console.log(
      `HTTP Server running at http://localhost:${process.env.HTTP_PORT}/`
    );
  });
  const wsServer = new WebSocketServer({ port: process.env.WS_PORT }, () => {
    console.log(
      `WebSocket Server running at ws://localhost:${process.env.WS_PORT}`
    );
  });

  wsServer.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
      msg = JSON.parse(data);
      const { k: key, v: val } = msg;
      if (buttons[key]) {
        device.buttons[buttons[key]].set(val > 0 ? true : false);
      } else if (axes[key]) {
        const value =
          val > 0
            ? key.endsWith('U') || key.endsWith('L')
              ? MIN_AXIS
              : MAX_AXIS
            : MID_AXIS;
        device.axes[axes[key]].set(value);
      } else if (POVs[key] !== undefined) {
        device.discretePOV[1].set(val > 0 ? POVs[key] : -1);
      }
    });
  });
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
