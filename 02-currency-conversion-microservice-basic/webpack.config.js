const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const NodeExternals = require('webpack-node-externals');
const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js'],
    fallback: {
      fs: false,
      net: false,
    },
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [NodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new DefinePlugin({
      'process.env.CURRENCY_EXCHANGE_SERVICE_HOST': JSON.stringify(
        process.env.CURRENCY_EXCHANGE_SERVICE_HOST
      ),
    }),
  ],
};
