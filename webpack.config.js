var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    'index': path.join(__dirname, '/public/index.js')
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.join(__dirname, '/public/'),
    devtoolLineToLine: true,
    pathinfo: true,
    sourceMapFilename: '[name].js.map',
    publicPath: path.join(__dirname, '/src/main/webapp/')
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.sass$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      // helps to load bootstrap's css.
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.woff2$/,
        loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, '/public'),
    compress: true
  },
  devtool: 'eval'
}
