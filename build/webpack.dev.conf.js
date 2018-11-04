const path = require('path');
const config = require('../config');
const utils = require('./utils');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const host =  process.env.host || config.dev.host || 'localhost';
const port = (process.env.port && Number(process.env.port)) || config.dev.port || 8080;

module.exports = {
  mode: 'development',
  entry: [
    path.join(__dirname, '../src/client/app.js')
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devServer: {
    host,
    port,
    index: path.join(__dirname, '../index.html'),
    compress: true,
    filename: path.join(__dirname, '../dist/bundle.js'),
    hot: config.dev.hot,
    https: config.dev.https,
    lazy: true,
    open: config.dev.open,
    overlay: config.dev.overlay,
    publicPath: path.join(__dirname, '..', config.dev.assetsPath)
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      extends: 'stylelint-config-standard'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
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
};