var data = [{item: 'tea'}, {item:'coffee'},{item:'milk'}];
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

    app.get('/', function(req,res){
        res.render('todo',{todo: data});
    });
    app.get('/todo', function(req,res){
        res.render('todo');
    });
    app.post('/todo',urlEncodedParser,function(req,res){
        console.log(req.body);
        data.push(req.body);
        res.push(data);
    });
    app.delete('/todo', function(req,res){
    });
};