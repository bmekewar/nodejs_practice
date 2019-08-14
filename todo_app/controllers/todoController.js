var bodyParser = require('body-parser');
var data = [{ item: 'tea' }, { item: 'coffee' }, { item: 'milk' }];
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('todo', { todos: data });
    });
    app.get('/todo', function(req, res) {
        res.render('todo', { todos: data });
    });
    app.post('/todo', urlEncodedParser, function(req, res) {
        data.push(res.body);
        res.json(data);
    });
    app.delete('/todo', function(req, res) {
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
    });
};