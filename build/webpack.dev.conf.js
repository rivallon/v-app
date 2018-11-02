const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: [
    path.join(__dirname, '../src/client/app.js')
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};