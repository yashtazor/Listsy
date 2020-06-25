module.exports = function(app)
{

    app.get('/listsy', function(req, res)
    {
        res.render('Main');
    });

    app.post('/listsy', function()
    {

    });

    app.delete('/listsy', function()
    {

    });

}