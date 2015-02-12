var http = require('http');
var config = require('./config/main.js').server;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(config.PORT, config.IP);

console.log('Server running at http://' + config.IP + '/');
