// The modules
var config = require('./config')
var express = require('express')
var server = express()
var cookieParser = require('cookie-parser')
var requestLanguage = require('express-request-language')
var fs = require('fs')

// The middleware
server.use(cookieParser())
server.use(requestLanguage({
  languages: config.languages,
  cookie: { name: 'language', options: { maxAge: 24 * 3600 * 1000 }, url: '/languages/{language}' }
}))

function serveReact(req, res, next) {
  var streamFile = fs.createReadStream('./public/web/html/index_' + req.language + '.html')
  streamFile.on('error', function (err) { return next(err) })
  streamFile.pipe(res)
}

// static route
server.use('/web', express.static('./public/web'))

// home country academy, subAcademy, division or sector link
server.use('/', serveReact)
server.use('/Profile', serveReact)
server.use('/Join', serveReact)

// start the express server
server.listen(config.app.port, function () {
  console.info('server is listening on port ', config.app.port)
})
