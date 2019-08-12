
var fs = require('fs');
var readme = fs.readFileSync('readme.txt','utf8');
console.log(readme);
fs.writeFileSync('writeme.txt', readme);


var readme2 = fs.readFile('readme.txt','utf8', function(err,data) {
   if(err) console.log('error', err);
   console.log(data);
   fs.writeFile('writeme.txt','Text updated',function(err, result) {
      if(err) console.log('error', err);
   }); 
});

console.log('test');

fs.unlink('writeme.txt',function(err, result) {
   if(err) console.log('error', err);
   console.log('file deleted');
});

