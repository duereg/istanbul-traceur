'use strict';

var istanbul = require('istanbul');

for (var key in istanbul) {
  /* istanbul ignore else */
  if (istanbul.hasOwnProperty(key)) {
    exports[key] = istanbul[key];
  }
}

exports.Instrumenter = require('./instrumenter');
