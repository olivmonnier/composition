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
        test: [/\.jsx?$/, /\.tsx?$/],
        exclude: /node_modules/,
        use: ['babel-loader']
      }            
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    minimize: true
  }
}