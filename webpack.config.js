const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",

  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },

  devServer: {
    static: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
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
      filename: "styles.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
