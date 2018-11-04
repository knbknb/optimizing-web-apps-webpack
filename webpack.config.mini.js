const path = require('path')
module.exports = {
    entry: ['./app/app.js'],
    output:{
      // must be an absolute path
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'app.bundle.js',
        publicPath: '/dist/'
    }
}