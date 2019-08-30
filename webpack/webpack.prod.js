const {EnvironmentPlugin} = require('webpack');
const merge = require('webpack-merge');

const { VERSION, PRODUCTION } = require('./constants');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: PRODUCTION,
  devtool: 'none',
  plugins: [
    new EnvironmentPlugin({
      DEBUG: false,
      VERSION: VERSION,
      NODE_ENV: PRODUCTION,
    })
  ]
});
