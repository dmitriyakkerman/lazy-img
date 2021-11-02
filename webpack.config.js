let path = require('path');
let webpack = require('webpack');

module.exports = {
    watch: true,
    entry: {
        'lazy-img': './src/lazy-img.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    }
};