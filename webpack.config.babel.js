import { join } from 'path';

const include = join(__dirname, 'source');

export default {
  entry: './source/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'pokemonAppLib',
  },
  devtool: 'source-map',
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