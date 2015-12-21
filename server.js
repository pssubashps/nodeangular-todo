var express  = require('express');
var app      = express();                               // create our app w/ express var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var path = require('path');
var mysql      = require('mysql');
var mysqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'node1'
});

mysqlConnection.connect();
    // configuration =================

//mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io
app.use(express.static(path.join(__dirname + '/public')));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // listen (start app with node server.js) ======================================
    app.listen(1337);
    console.log("App listening on port 8080");
   
app.get('/api/all',function(req,res){
     mysqlConnection.query( 'SELECT id,taskname as name FROM tbl_task', function(err, rows){
        res.json(rows);
         console.log(rows);
	});
     res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
	
});
app.get('/', function(req, res) {
        res.sendfile('public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });