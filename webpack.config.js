const path = require('path')
const uglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const dev = process.env.NODE_ENV === "dev"

// Loader CSS
// css-loader => transform CSS in string
// style-loader => inject CSS into HTML style tags

let cssLoaders = [
          { loader: 'css-loader', options: { importLoaders: 1, minimize: !dev, url: true } },
        ]


// If prod, use autoprexifer post css plugin
if(!dev) {
  cssLoaders.push({
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: ['last 2 versions', 'ie > 8']
                }),
              ]
            }
        })
}


// MAIN CONFIG
let config = {
  entry: {
    // Special syntax (change file name with:)
    // name : 'path/to/file'
    app: ['./assets/css/app.scss', './assets/js/app.js']
  },
  watch: dev,
  output: {
    path: path.resolve('./dist'),
    // Hash name on prod (prevent from caching issue when deployed changes)
    filename: dev ? '[name].js' : '[name].js',
    publicPath: "./dist/",
  },
  // Alis directory URL
  resolve: {
    alias: {
      '@css': path.resolve('./assets/css/'),
      '@js': path.resolve('./assets/js/')
    }
  },
  // if dev, use source-map module
  devtool: dev ? "cheap-module-source-map" : false,
  module: {
    rules: [
    // JS rules
      /*{
        // force eslint to load before anything else
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['eslint-loader']
      },*/
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
    // CSS rules
      {
        test: /\.css$/,
        use: cssLoaders
      },
    // SASS rules
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          // si ETP disable, use style-loader
          fallback: "style-loader",
          use: [...cssLoaders, 'sass-loader']
        })
      },
      // FONTS rules
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      },
      // IMAGES rules
      {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            // Under limit, file will be translate ine base16 (usefull for icons e.g)
            limit: 8192,
            name: '[name].[ext]'
          }
        },
        {
          loader: 'img-loader',
          options: {
            enabled: !dev
          }
        }
      ]
    }
    ]
  },

  // plugins

  plugins: [

  // Extract css string to file.css
  // disable in dev
    new ExtractTextPlugin({
      // Hash name on prod (prevent from caching issue when deployed changes)
      filename: dev ? '[name].css' : '[name].css',
      disable: dev
    })
  ]
}


// if prod,
if (!dev) {
  // use Uglify
  config.plugins.push(new uglifyJSPlugin({
    sourceMap: false
  }))
  // use ManifestPlugin
  // ManifestPlugin = create a minfest.json file with all css/js files paths are registered (w/dynamic naming & php including)
  config.plugins.push(new ManifestPlugin())
  
  config.plugins.push(new CleanWebpackPlugin(['dist'], {
      root: path.resolve('./'),
      verbose: true,
      // dry:true = test
      // Allow to launch npm run prod without deleting anything (in order to check if path are okay, etc.)
      dry: false
    }))
}

module.exports = config
