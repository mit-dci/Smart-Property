var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    wallet:  './client/js/wallet.js',
    display: './client/js/display.js',
    owners: './client/js/owners.js'
  },
  output: {
    path:     './public/',
    filename: 'js/[name].js' //Template based on keys in entry above
  },
  module: {
    loaders: [
      {
        test:    /\.js$/,
        exclude: /(node_modules)/,
        loader:  'babel',
        query:   {
          presets: ['es2015'],
        },
      },
      {
        test:    /\.json$/,
        loader:  'json',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', // The backup style loader
          'css?sourceMap!sass?sourceMap'
        )
      },
    ],
  },
  sassLoader: {
    includePaths: [ './client/sass' ]
  },
  plugins: [
    new ExtractTextPlugin("style/[name].css")
  ],
};
