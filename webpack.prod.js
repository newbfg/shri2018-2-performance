const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge.smart(
  common,
  {
    mode: 'production',
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin({})]
    }
  },
  {
    output: {
      path: path.resolve(__dirname, 'dist2'),
      publicPath: './'
    }
  }
);
