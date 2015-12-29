module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'dist/bundle.js'
    },
    devtool: 'eval',
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] }
        ]
    }
};