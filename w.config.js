const webpack = require("webpack");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { version } = require("./package.json");

const entry = `${__dirname}/src/index.js`;

const output = {
  filename: "page/[name]/index.js",
  chunkFilename: "chunk/[name].[chunkhash:5].chunk.js",
};

const devtool = "source-map";

// loader
const loaders = [
  {
    test: /\.(json)$/,
    exclude: /node_modules/,
    loader: "json",
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [{ loader: "babel-loader" }, { loader: "eslint-loader" }],
  },
  {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.(?:png|jpg|gif|svg)$/,
    use: "file-loader",
  },
  {
    test: /\.md$/,
    use: [{ loader: "file-loader" }],
  },
];

// dev plugin
const devPlugins = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": '"development"',
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new OpenBrowserPlugin({
    url: "http://127.0.0.1:8080/",
  }),
];

// production plugin
const productionPlugins = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": '"production"',
  }),
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "index.html",
  }),
];

// dev server
const devServer = {
  contentBase: "./public",
  historyApiFallback: true,
  port: 8080,
  hot: true,
  inline: true,
  host: "127.0.0.1",
  disableHostCheck: true,
  publicPath: "/",
};

module.exports = {
  entry,
  devtool,
  output,
  loaders,
  devPlugins,
  productionPlugins,
  devServer,
  version,
};
