const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

const { SRC_PATH, OUTPUT_PATH, DEFAULT_PUBLIC_PATH } = require('./constants');

module.exports = {
  entry: {
    app: `${SRC_PATH}/index.js`,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: join(OUTPUT_PATH, DEFAULT_PUBLIC_PATH),
    publicPath: DEFAULT_PUBLIC_PATH
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Responsiveish',
      filename: `${join(OUTPUT_PATH, DEFAULT_PUBLIC_PATH)}/index.html`,
      template: `${SRC_PATH}/index.ejs`,
      publicPath: DEFAULT_PUBLIC_PATH
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
      //{
      //   test: /\.less$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'less-loader'
      //   ]
      // }
    ]
  }
};
