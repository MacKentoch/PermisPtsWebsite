import webpack            from 'webpack';
import path               from 'path';
import ExtractTextPlugin  from 'extract-text-webpack-plugin';
import autoprefixer       from  'autoprefixer';
import precss             from 'precss';

const assetsDir       = path.resolve(__dirname, 'public/assets');
const nodeModulesDir  = path.resolve(__dirname, 'node_modules');
const SPLIT_STYLE     = true;

const config = {
  entry: [
    path.resolve(__dirname, 'src/app/index.js')
  ],
  output: {
    path: assetsDir,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [nodeModulesDir],
      loader: 'babel'
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
  plugins: [
    new ExtractTextPlugin('app.styles.css'),
    getImplicitGlobals(),
    setNodeEnv(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    uglify()
  ],
  postcss: function () {
    return [precss, autoprefixer];
  }
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
      'NODE_ENV': JSON.stringify('production')
    }
  });
}

function uglify() {
  return new webpack.optimize.UglifyJsPlugin({
    // Don't beautify output (enable for neater output)
    beautify: false,
    // Eliminate comments
    comments: true,
    // Compression specific options
    compress: {
      warnings: false,
      // Drop `console` statements
      'drop_console': true
    },
    // Mangling specific options
    mangle: {
      // Don't mangle $
      except: ['$'],
      // Don't care about IE8
      'screw_ie8': true,
      // Don't mangle function names
      'keep_fnames': false
    }
  });
}

export default config;
