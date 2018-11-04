const webpack = require('webpack') // needed for loading plugins
const path = require('path')
module.exports = function(env) {
      // webpack configuration object
      return {
        entry: ['./app/app.js'],
        output:{
        // must be an absolute path
            path: path.resolve(__dirname, 'app/dist'),
            filename: 'app.bundle.js',
            publicPath: '/dist/'
        },
        devServer: {contentBase: [
            path.resolve(__dirname, 'app'),
            path.resolve(__dirname, 'app', 'klondike')],
            publicPath: '/dist/',
            watchContentBase: false,
            hotOnly: true
        },
        plugins: [
            new webpack.NamedModulesPlugin()
        ]
    }
}  