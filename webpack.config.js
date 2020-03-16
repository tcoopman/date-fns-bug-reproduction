const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const public = "public";
const outputDir = path.join(__dirname, public);

module.exports = {
  entry: "./src/Index.bs.js",
  output: {
    path: path.resolve(__dirname, public),
    filename: "public/index.[contenthash].js"
  },
  module: {
    rules: [
      // { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
  ],
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true
  }
};

