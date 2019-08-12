var http = require('http');

var server = http.createServer(function(request,response){
    console.log('request was made from : ',request.url);
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('This is end!!');
});

server.listen(3000,'localhost');
console.log('now listening to port 3000');