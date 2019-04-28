const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
module.exports = {
  entry: {
    bees: './src/components/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
    // libraryExport: 'default',
    library: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use:{
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)/,
        use: [
          {
            loader:'url-loader',
            options:{
              limit: 8192,
              name: 'resource/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff2|woff|otf)/,
        use: [
          {
            loader:'url-loader',
            options:{
              limit: 8192,
              name: 'resource/[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
}