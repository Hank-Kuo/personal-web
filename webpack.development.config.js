const config = require("./w.config");

module.exports = {
  devtool: config.devtool,
  entry: config.entry,
  output: {
    path: `${__dirname}/server`,
    filename: "app.js",
    publicPath: "/",
  },
  module: {
    rules: config.loaders,
  },
  plugins: config.devPlugins,
  devServer: config.devServer,
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
