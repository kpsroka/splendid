/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * Copyright (c) 2017-present, K. P. Sroka
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.MIT file in the root directory of this source tree.
 */
'use strict';

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/tutorial-webpack.html

module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  },
};
