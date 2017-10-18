/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * Copyright (c) 2017-present, K. P. Sroka
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.MIT file in the root directory of this source tree.
 */
'use strict';

const path = require('path');

// This is a custom Jest transformer turning file imports into filenames.
// http://facebook.github.io/jest/docs/tutorial-webpack.html

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
