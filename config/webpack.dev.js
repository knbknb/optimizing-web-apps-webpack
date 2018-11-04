const webpack = require('webpack'); // needed for loading plugins
module.exports = {
      // webpack configuration object
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "isProduction": JSON.stringify(false),
            "isDevelopment": JSON.stringify(true)
          })
    ]
    
  }