//import webpack from '../javascript-development-environment/webpack.config.dev'
const webpack = require('webpack');
const path = require('path')

module.exports = env => {
  const isDevelopment = env.NODE_ENV === 'development'
  const isProduction = env.NODE_ENV === 'production'
  console.log(`This is a ${env.NODE_ENV} build`);
  return {
      entry: ['./app/app.js'],
      output:{
        // must be an absolute path
          path: path.resolve(__dirname, 'app/dist'),
          filename: 'app.bundle.js',
          publicPath: '/dist/'
      },
      devServer: {contentBase: [
          path.resolve(__dirname, 'app')],
          publicPath: '/dist/',
          watchContentBase: true,
          hot: true
      },
      plugins: [
          new webpack.NamedModulesPlugin(),
          new webpack.HotModuleReplacementPlugin()]
    }
  };
