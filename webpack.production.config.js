const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = require("./w.config");

module.exports = {
  devtool: config.devtool,
  entry: config.entry,
  output: {
    path: `${__dirname}/build`,
    filename: `app-${config.version}.js`,
    publicPath: "/",
  },
  module: {
    rules: config.loaders,
  },
  plugins: config.productionPlugins,

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
