var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readable.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writable.txt');

/*myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    myWriteStream.write(chunk);
});
*/
myReadStream.pipe(myWriteStream);
