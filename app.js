var express = require('express'),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	path = require('path'),
	users = require('./routes/users'),
	index = require('./routes/index'),
	config = require('./config/config');

	var app = express();
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:false}));
	app.use(cookieParser());
	app.use(session({secret:'s3kr3t',cookie:{maxAge:60000000}}));
	app.use(express.static(path.join(__dirname,'public')));

	app.set('views',path.join(__dirname, 'views'));
	app.set('view engine','jade');

	app.get('/',index);

	app.get('/users',users);

	app.listen(config.port, function(){
		console.log('app running on port: ' + config.port);
	});

		


