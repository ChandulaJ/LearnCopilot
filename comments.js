//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./models/comment');
var Post = require('./models/post');
var User = require('./models/user');
var jwt = require('jsonwebtoken');
var config = require('./config');
var router = express.Router();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

//connect to DB
mongoose.connect(config.database);

//use body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

//use morgan to log requests to console
app.use(morgan('dev'));

//set static files location
//used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

//api routes
var apiRoutes = require('./app/routes/api')(router, io);
app.use('/api', apiRoutes);

//home route
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

//start server
server.listen(port);
console.log('Server running on port ' + port);
