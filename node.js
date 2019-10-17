let http = require("http");
http.createServer( (res, req) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("server");
  res.send();
}).listen(8080);
