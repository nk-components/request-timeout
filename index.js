'use strict';

var raf = require('raf');
var now = require('time-now');


exports = module.exports = timeout;

function timeout(delay, fn) {
  var start = now();
  var data = Object.create(null);
  data.id = raf(loop);

  return data;

  function loop() {
    (now() - start) >= delay
      ? fn.call()
      : data.id = raf(loop);
  }
}


exports.clear = clearTimeout;

function clearTimeout(data) {
  raf.cancel(data.id);
}
