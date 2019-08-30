const { EnvironmentPlugin, HotModuleReplacementPlugin, NoEmitOnErrorsPlugin } = require('webpack');
const merge = require('webpack-merge');

const { PUBLIC_PATH, VERSION, DEVELOPMENT, DEFAULT_HOST, DEFAULT_PORT, DEFAULT_PUBLIC_PATH } = require('./constants');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: DEVELOPMENT,
  devtool: 'eval-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
    new EnvironmentPlugin({
      DEBUG: true,
      VERSION: VERSION,
      NODE_ENV: DEVELOPMENT,
    })
  ],
  devServer: {
    hot: true,
    host: DEFAULT_HOST,
    port: DEFAULT_PORT,
    open: 'Google Chrome',
    compress: true,
    liveReload: false,
    publicPath: DEFAULT_PUBLIC_PATH,
    contentBase: PUBLIC_PATH,
    historyApiFallback: {
      disableDotRule: true
    },
    overlay: {
      warnings: true,
      errors: true
    }
  }
});
