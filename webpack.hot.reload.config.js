const webpack            = require('webpack');
const path               = require('path');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const autoprefixer       = require('autoprefixer');
const precss             = require('precss');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const assetsDir = path.resolve(__dirname, 'public/assets');
const SPLIT_STYLE     = true;

const config = {
  devtool: 'eval',
  entry: {
    home: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'src/app/index.js')
    ],
    privacy: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'src/app/privacy.js')
    ]
  },
  output: {
    path: assetsDir,
    filename: '[name].bundle.js',
    // filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src/app')
    },  {
      test: /\.css$/,
      loader: SPLIT_STYLE ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') : 'style!css!postcss'
    }, {
      test: /\.scss$/,
      loader: SPLIT_STYLE ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader') : 'style!css!postcss!sass'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      loader: 'url?limit=100000&name=[name].[ext]'
    }
  ]},
  postcss() {
    return [precss, autoprefixer];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CommonsChunkPlugin('commons.chunk.js'),
    new ExtractTextPlugin('app.styles.css'),
    getImplicitGlobals(),
    setNodeEnv()
  ]
};

function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  });
}

function setNodeEnv() {
  return new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('dev')
    }
  });
}

module.exports = config;
