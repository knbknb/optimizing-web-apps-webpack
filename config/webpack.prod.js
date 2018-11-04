const webpack = require('webpack'); // needed for loading plugins
module.exports =  {
      // webpack configuration object
      plugins: [
        new webpack.DefinePlugin({
            "isProduction": JSON.stringify(true),
            "isDevelopment": JSON.stringify(false)
        })
    ]
}
  