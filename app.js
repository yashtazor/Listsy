//Import the required modules.
var express = require('express');
var control = require('./control/control.js');

// Initialize the app.
var app = express();

// Set View Engine to serve the templates.
app.set('view engine', 'ejs');

// Set middleware to control styling and some other functionalities.
app.use(express.static('./public'));

// Fire the routing controllers.
control(app);

// Listen to the requests by the client.
app.listen(3000);
console.log("Listening to requests from the client");