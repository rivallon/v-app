const path = require('path');
const webpackBaseConfig = require('./webpack.base.conf');
const config = require('../config');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const host =  process.env.host || config.dev.host || 'localhost';
const port = (process.env.port && Number(process.env.port)) || config.dev.port || 8080;

const resolve = (_path) => path.join(__dirname, '..', _path);

const webpackDevConfig = Object.assign(webpackBaseConfig, {
  mode: 'development',
  watchOptions: {
    poll: true
  },
  devServer: {
    clientLogLevel: 'warning',
    host,
    port,
    filename: resolve('dist/bundle.js'),
    quite: true,
    compress: true,
    hot: config.dev.hot,
    https: config.dev.https,
    lazy: true,
    open: config.dev.open,
    overlay: config.dev.overlay,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: 'index.html',
      template: resolve('index.html'),
      minify: true,
      // inject: true
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${host}:${port}`],
      },
      onErrors: config.dev.notifyOnErrors
      ? utils.createNotifierCallback()
      : undefined
    })
  ]
});

module.exports = webpackDevConfig;
