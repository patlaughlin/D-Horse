var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  loaders: [
    // image loader - https://www.npmjs.com/package/image-webpack-loader
    {
      test: /\.(jpe?g|png|gif|svg|ico)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
    // javascript/jsx loader - https://www.npmjs.com/package/babel-loader
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader?stage=0&optional=runtime']
    },
    //eslint
    {
      test: /\.js$/,
      loader: "eslint-loader",
      exclude: /node_modules/
    },
    // styles
    {
      test: /\.[s]?css$/,
      loader: "style!css!autoprefixer-loader?browsers=last 2 version"
    },
    // less
    {
      test: /\.less$/,
      loader: "style!css!less!"
    },
    // and font files - embed them if possible
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff2"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"
    }
  ],
  eslint: {
    configFile: './.eslintrc'
  },
  // https://www.npmjs.com/package/html-webpack-plugin - generate our html file from a template - makes it easier to include custom stuff
  indexPagePlugin: new HtmlWebpackPlugin({
    inject: true,
    title: 'webpack starter template 123',
    filename: 'index.html',
    template: './app/index_template.html'
  })
};