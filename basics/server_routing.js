var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made from :'+req.url);
    if(req.url==='/home'|| req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);
    } else if(req.url==='/json'){
        var myObj = {
            name:'Jeff',
            job:'IT',
            age:'56'
        };
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(myObj));
    } else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
});

server.listen(3000,'localhost');
console.log('Listening to port 3000');
