const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge.smart(
  common,
  // {
  //   optimization: {
  //     minimizer: [
  //       new UglifyJsPlugin({
  //         cache: true,
  //         parallel: true
  //       }),
  //       new OptimizeCSSAssetsPlugin({})
  //     ]
  //   },
  //   mode: 'production'
  // },
  {
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: './'
    }
  }
);
