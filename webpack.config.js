const path = require("path");
const MiniCssExtractPlugun = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",

  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
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
        use: [MiniCssExtractPlugun.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [new MiniCssExtractPlugun()],
};
