var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.listen(3000);

app.get('/',function(req,res){
    res.render('./index.ejs');
});

app.get('/contact',function(req,res){
    res.render('./contact.ejs');
});

app.get('/profile/:name',function(req,res){
    var data = {age: 24, job:'developer', hobbies:['reading', 'riding', 'dancing']};
    res.render('./profiles',{'person': req.params.name,data:data});
});
