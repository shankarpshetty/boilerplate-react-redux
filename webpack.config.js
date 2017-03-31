module.exports = {
    // Entry
    entry: './app/client/index.js',

    // Output
    output: {
        filename: 'app.js',
        path: __dirname + '/app/dist'
    },

    // Loaders
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    // Watch
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
}