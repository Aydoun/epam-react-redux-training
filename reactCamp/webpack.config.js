const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'app-bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader'}
        ]
      } ],

  },
};