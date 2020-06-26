var BodyParser = require('body-parser');
var urlEncodedParser = BodyParser.urlencoded({extended: false});
var mongoose = require('mongoose');


// -------------------------------------------------------------------------------------------------------------------------
// Connection to MongoDB.

mongoose.connect('<Your MongoDB URL here>');

var Schema = new mongoose.Schema({
    item: String
});

var Model = mongoose.model('<Your Model Name>', Schema);


// -------------------------------------------------------------------------------------------------------------------------
// Request Control Function.

module.exports = function(app)
{
    
    // GET Request.
    app.get('/listsy', function(req, res)
    {
        // Fetch from MongoDB and render it to the view.

        Model.find({}, function(err, data){ 
            if(err) throw err;
            res.render('Main', {todos: data});
        });
    });

    // POST Request.
    app.post('/listsy', urlEncodedParser, function(req, res)
    {
        // Fetch the newly added item from the view and push it into MongoDB.

        var newTodo = Model(req.body).save(function(err, data){ 
            if(err) throw err;
            res.json(data);
        });
    });

    // DELETE Request.
    app.delete('/listsy/:item', function(req, res)
    {
        // Delete selected item from the view from MongoDB.

        Model.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if(err) throw err;
            res.json(data);
        });  
    });

}