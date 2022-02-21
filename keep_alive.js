var http = require('http');

http.createServer(function (req, res) {
  res.write("Started Client");
  res.end();
}).listen(8080);