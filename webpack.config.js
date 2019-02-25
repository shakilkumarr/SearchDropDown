var webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    mode : "development",
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                },
                test: /\.js?$/,
                exclude: /node_modules/
            },
            {
              test:/\.css$/,
              use:[
                {
                  loader: "style-loader"
                },
                {
                  loader: "css-loader",
                  options: {
                    modules: true,
                    localIdentName: "[name]__[local]__[hash:base64:5]"
                  }
                }
              ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
