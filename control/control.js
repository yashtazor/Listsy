var BodyParser = require('body-parser');
var urlEncodedParser = BodyParser.urlencoded({extended: false});

var data = [{item:'First'}, {item:'Second'}];

module.exports = function(app)
{

    app.get('/listsy', function(req, res)
    {
        res.render('Main', {todos: data});
    });

    app.post('/listsy', urlEncodedParser, function(req, res)
    {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/listsy', function()
    {

    });

}