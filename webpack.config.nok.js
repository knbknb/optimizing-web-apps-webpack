// import webpack from 'webpack';
// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

const webpack =require('webpack');
const path = require( 'path');
//const {HtmlWebpackPlugin} = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.json']
  },
  devtool: 'inline-source-map',
  // debug: true, ?deprecated
  // noInfo: false,
  entry: [path.resolve(__dirname, 'app/index.html')],
  target: 'web',
  output: { //does not write any files actually
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.bundle.js'
    //watchContentBase: true //also watches static files for changes
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true // set to false to see a list of every file being bundled.
    }),

    // Create HTML file that includes reference to bundled JS.
    // new HtmlWebpackPlugin({
    //   template: 'src/index.html',
    //   inject: true
    // })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
};
