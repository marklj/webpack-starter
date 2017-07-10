const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var buildDir = 'dist';

module.exports = {

  entry: {
    app: './src/index.js',
    vendor: ['lodash']
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, buildDir),
    publicPath: '/'
  },

  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, buildDir),
    publicPath: '/'
  },

  module: {
   rules: [

     // styles / css
     {
       test: /\.css$/,
       use: ExtractTextPlugin.extract({
         use: [
             {
               loader: 'css-loader',
               options: { importLoaders: 1 },
             },
             'postcss-loader',
           ],
        })
     },

     // html / templates
     {
        test: /\.html$/,
        use: [
          "html-loader"
        ]
      },

     // images
     {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },

      // fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }

   ]
 },

 plugins: [
  new HtmlWebpackPlugin({
    title: 'Page Title',
    //favicon: './src/favicon.ico',
    template: './src/layouts/default.html'

  }),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('styles.css'),
  new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
  })
 ]

};
