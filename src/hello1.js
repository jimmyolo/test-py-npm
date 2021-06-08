'use strict';

const { runPy, defaultOptions } = require('../helper');

module.exports = (opts = {}) =>
  runPy('hello1.py', { ...defaultOptions, ...opts });
