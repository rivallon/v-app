process.env.NODE_ENV = 'production';

const config = require('./webpack.build.conf');
const webpack = require('webpack');

webpack(config);
