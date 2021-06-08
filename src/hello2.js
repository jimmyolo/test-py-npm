'use strict';

const { runPy, defaultOptions } = require('../helper');

module.exports = (opts = {}) =>
  runPy('hello2.py', { ...defaultOptions, ...opts });
