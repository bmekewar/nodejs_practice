var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made from :'+req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(res);
});

server.listen(3000,'localhost');
console.log('Listening to port 3000');
