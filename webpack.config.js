const path = require('path')
const webpack = require("webpack")

module.exports = {
  entry: {
    library: './src/main'
  },
  output: {
    library: 'composition',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }            
    ]
  },
  optimization: {
    minimize: true
  }
}