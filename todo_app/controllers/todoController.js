var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mongoose = require("mongoose");

// connect to database
mongoose.connect("mongodb+srv://test:test@server/todo", { useNewUrlParser: true });

//create a schema
var todoSchema = new mongoose.Schema({
    item: String
});

// create model todo
var Todo = mongoose.model('Todo', todoSchema);
/*var item1 = Todo({
    item: 'testing'
}).save(function(err) {
    if (err) throw err;
    console.log('item saved');
});*/

//var data = [{ item: 'tea' }, { item: 'coffee' }, { item: 'milk' }];

module.exports = function(app) {

    /*app.get('/', function(req, res) {
        res.render('todo', { todos: data });
    });*/
    app.get('/todo', function(req, res) {
        //res.render('todo', { todos: data });
        //get data from mongodb and pass it to view
        Todo.find({}, function(err, data) {
            if (err) throw err;
            res.render('todo', { todos: data });
        });
    });
    app.post('/todo', urlencodedParser, function(req, res) {
        //data.push(res.body);
        //res.json(data);
        // get data from the view and add it to mongodb
        var newTodo = Todo(req.body).save(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item', function(req, res) {
        /* data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
        */
        //delete the requested item from db
        Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
    });
};