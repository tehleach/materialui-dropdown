/* eslint max-statements: 0 */
module.exports = function () {
  var express = require('express')
  var gracefulExit = require('express-graceful-exit')
  var path = require('path')

  var app = express()
  app.use(gracefulExit.middleware(app))

  var webpackConfig = require('../../webpack.config')
  var compiler = require('webpack')(webpackConfig)
  app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
  app.use(require('webpack-hot-middleware')(compiler))
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '../public/index.html'))
  })

  return app
}
