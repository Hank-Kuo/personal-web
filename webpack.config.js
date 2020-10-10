var config = require('./w.config');

var path = require('path');

// dev环境配置
module.exports = {
  devtool: config.devtool,
  entry: config.entry,
  output: {
    path: __dirname + '/server',
    filename: 'app.js',
  },
  module: {
    rules: config.loaders
  },
  plugins: config.devPlugins,
  devServer: config.devServer,
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

//postcss: config.postcss