const webpack = require('webpack');

module.exports = {
    // Entry
    entry: [
      'react-hot-loader/patch',
      './app/client/index.js'
    ],

    // Output
    output: {
        filename: 'bundle.js',
        path: __dirname + '/app/dist',
        publicPath: 'http://localhost:4040/app/dist/'
    },

    // Loaders
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },

    plugins: [
      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR updates
    ],

    // Watch
    watchOptions: {
        ignored: /node_modules/
    }
}