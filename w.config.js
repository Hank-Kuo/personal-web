var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var version = require('./package.json').version;

var path = require('path')

// 程序入口
var entry =  __dirname + '/src/index.js';

// 输出文件
var output =  {
  filename: 'page/[name]/index.js',
  chunkFilename: 'chunk/[name].[chunkhash:5].chunk.js',
};

// 生成source-map追踪js错误
var devtool = 'source-map';

// loader
var loaders = [
    {
      test: /\.(json)$/,
      exclude: /node_modules/,
      loader: 'json',
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{ loader: "babel-loader" }, { loader: "eslint-loader" }],
      
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(?:png|jpg|gif)$/,
      use: 'file-loader'
    },
    {
      test: /\.md$/,
      use: [{ loader: 'file-loader'}]
    }
];

// dev plugin
var devPlugins =  [
  // 热更新
  new webpack.HotModuleReplacementPlugin(),
  // 允许错误不打断程序, 仅开发模式需要
  new webpack.NoEmitOnErrorsPlugin(),
  // 打开浏览器页面
  new OpenBrowserPlugin({
    url: 'http://127.0.0.1:8080/'
  }),
 
]

// production plugin
var productionPlugins = [
  // 定义生产环境
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }),
  // HTML 模板
  new HtmlWebpackPlugin({
    
    template: './public/index.html',
    filename: 'index.html',
  }),
];

// dev server
var devServer = {
  contentBase:  './public',
  historyApiFallback: true,
  port: 8080, 
  hot: true, 
  inline: true, 
  host: '127.0.0.1',
  disableHostCheck: true,
  publicPath: '/',
};

module.exports = {
  entry: entry,
  devtool: devtool,
  output: output,
  loaders: loaders,
  devPlugins: devPlugins,
  productionPlugins: productionPlugins,
  devServer: devServer,
  version: version,
};
