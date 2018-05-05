//Echo's inbound POST message to the console

//require statgements
var express = require('express');
var app = express();
var notifier = require('./routes/notifier.js');

//Express API setup ///////////////////////////////////////////////////////////////////

//for parsing POST payloads
app.use(express.bodyParser());
//authenticates user - url maps to function
app.post('/notify', notifier.notify);

//set listener port
var port = 3001;

//start listener on HTTP port
app.listen(port);
console.log('Starting...');
console.log('Notification API Listening on port ' + port + '...');
//Express API setup ///////////////////////////////////////////////////////////////////



