const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const FontminPlugin = require('fontmin-webpack')

const PATHS = {
  src: path.join(__dirname, 'src')
};

module.exports = {
  entry: {
    app: './src/scripts.js'
  },
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'dist2'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }]
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist2']),
    new HtmlWebpackPlugin({
      title: 'Smarthome',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new FontminPlugin({
      autodetect: true, // automatically pull unicode characters from CSS
      glyphs: ['\uf0c8' /* extra glyphs to include */],
    }),
  ]
};
