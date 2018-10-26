const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge.smart(
  common,
  {
    mode: 'production'
  },
  {
    output: {
      path: path.resolve(__dirname, 'dist2'),
      publicPath: './'
    }
  }
);
