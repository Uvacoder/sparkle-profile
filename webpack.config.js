const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js'
    },
    module: {
      rules: [
        // {
        //     enforce: "pre",
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: "eslint-loader",
        //     options: {
        //         emitError: true
        //     }
        // },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: false }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "./css/main.css",
        chunkFilename: "./css/chunk.css"
      }),
      new CleanWebpackPlugin(["./dist/"]),
      new CopyPlugin([
        {
          from: './src/js/particles.json',
          to: './dist/js/particles.json',
          toType: 'file',
        },
      ]),
    ]
  };