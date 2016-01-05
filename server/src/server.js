var gracefulExit = require('express-graceful-exit')

var app = require('./app')()
console.log()
var server = app.listen(3000, function () {
  console.log('Listening on http://127.0.0.1:%d/', server.address().port)
})

process.on('SIGTERM', function() {
  gracefulExit.gracefulExitHandler(app, server)
})

process.on('uncaughtException', function(err) {
  console.error(err.stack)
  throw err
})
