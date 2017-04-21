const config = require('./webpack.config.base.js')
config.module.loaders[0] = {
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  query: {
    // This is a hack needed for test imports to work in the expected way https://github.com/59naga/babel-plugin-add-module-exports
    presets: ['es2015'], plugins: ['add-module-exports']
  }
}

// Important to note: the tests will in fact run in node, NOT in the browser
config.target = 'node'

module.exports = config
