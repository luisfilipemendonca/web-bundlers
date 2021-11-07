const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  entry: {
    hello: "./src/hello.js",
    "add-image": "./src/add-image.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },

  performance: {
    hints: false,
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(s?(a|c)?ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "hello.html",
      template: "src/page-template.html",
      chunks: ["hello"],
    }),
    new HtmlWebpackPlugin({
      filename: "image.html",
      template: "src/page-template.html",
      chunks: ["add-image"],
    }),
  ],
};
