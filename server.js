var express = require('express');
var webpack = require('webpack');
const wdm = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const path = require('path');

let compiler = webpack(config);

var app = express();
const PORT = process.env.PORT || 3000;

app.use(wdm(compiler, {publicPath: config.output.publicPath, logLevel : "info"}))

app.use(express.static('bin'))

app.listen(PORT, function(){
    console.log(`Listen on port ${PORT}...`);
});
