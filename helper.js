'use strict';

const path = require('path');
const util = require('util');

const { PythonShell } = require('python-shell');
const runPy = util.promisify(PythonShell.run);

const OPTIONS = {
  mode: 'text',
  pythonPath: '/usr/bin/python3',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: path.resolve(__dirname, './scripts'),
  args: [],
}

module.exports = {
  defaultOptions: OPTIONS,
  runPy,
};
