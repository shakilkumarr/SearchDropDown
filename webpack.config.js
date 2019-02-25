var webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js?$/,
                exclude: /node_modules/
            },
            {
        				test: /\.css/,
        				use: ['style-loader', 'css-loader']
      			}
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
