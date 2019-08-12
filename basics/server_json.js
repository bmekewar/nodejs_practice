var http = require('http');

var server = http.createServer(function(req,res){
    console.log('request was made from :'+req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var myObj = {
        name:'Jeff',
        job:'IT',
        age:'56'
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000,'localhost');
console.log('Listening to port 3000');
