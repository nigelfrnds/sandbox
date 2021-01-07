const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000 // compress if size less than 10kb
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html')
    }),
  ],
};