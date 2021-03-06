const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client/src');

module.exports = {
  // overrides default of current working drive
  context: APP_DIR,

  mode: 'development',

  entry: `${APP_DIR}/index.jsx`,

  // accurate source map that supports minimizing, though slow
  devtool: 'inline-source-map',

  // automatic rebundle upon save
  watch: true,

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    modules: [
      // doesn't seem to work
      'client/src',
      // works fine
      'node_modules',
    ],
    // .scss extensions don't resolve for some reason
    extensions: ['*', '.js', '.jsx', '.css', '.scss', '.sass'],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
};
