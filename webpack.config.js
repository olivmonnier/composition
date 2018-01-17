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
        use: {
          loader: 'babel-loader'
        }
      }            
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
}