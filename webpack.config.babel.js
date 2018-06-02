import { join } from 'path';
import webpack from 'webpack';

let es6Promise = require('es6-promise');
es6Promise.polyfill();
const include = join(__dirname, 'source');

export default {
  entry: './source/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'pokemonAppLib',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'es6-promise-promise',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader:'babel-loader',
        include
      },
    ]
  }
}