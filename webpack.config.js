const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    entry: './scripts.js',
    output: {
        publicPath: '',
        path: path.resolve(__dirname, 'dist/'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9003,
        open: true
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/env']
                }
            },
            {
                test: /\.(png|svg|jp(e?)g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000
                        }
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name() {
                                return '[path][name].[ext]';
                            },
                            outputPath: 'assets/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ],
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Yandex Home',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyJS: true,
            },
            hash: true,
            filename: 'index.html',
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyWebpackPlugin([{
            from: 'assets',
            to: 'assets'
        }])
    ]
};
