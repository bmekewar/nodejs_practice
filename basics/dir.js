var fs = require('fs');

//fs.mkdirSync('stuffDir');
//fs.rmdirSync('stuffDir');

fs.mkdir('dir',function(err,dirData){
    if(err) console.log(err);
    else {
        //console.log(dirData);
       fs.readFile('readme.txt','utf8',function(err,fileData){
          //console.log(fileData);
          if(err) console.log(err); 
          else fs.writeFile('./dir/writeme.txt',fileData, function(err,writeData){
             if(err) console.log(err); 
             //console.log(writeData);
          });
       });
    } 
 });
 console.log('dir created');

 fs.unlink('./dir/writeme.txt',function(){
    console.log('deleting file');
    fs.rmdir('dir',function(err){
        if(err) console.log(err);
        console.log('deleting dir');
     });
 });
 
 
 