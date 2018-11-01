//import webpack from '../javascript-development-environment/webpack.config.dev'
const webpack = require('webpack'); 
const path = require('path')

const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'
console.log(`This is a ${process.env.NODE_ENV} build`);
module.exports = {
    entry: ['./app/app.js'],
    output:{
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