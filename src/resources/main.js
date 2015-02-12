var http = require('http');
var config = require('./config/main.js');
var fs = require('fs');


fs.readFile(config.client.path, function(error, html) {
	if (error) { throw error; }
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.end(html);
	}).listen(config.server.PORT, config.server.IP);
});

console.log('Server running at http://' + config.server.IP + '/');
