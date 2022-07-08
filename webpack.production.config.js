var config = require('./w.config');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var path = require('path')

// production环境配置
module.exports = {
  devtool: config.devtool,
  entry: config.entry,
  output: {
    path:__dirname + '/docs',
    filename: 'app-' + config.version+'.js',
    publicPath: '/',
  },
  module: {
    rules: config.loaders
  },
  plugins: config.productionPlugins,
  
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

//postcss: config.postcss,