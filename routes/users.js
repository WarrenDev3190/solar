var express = require('express'),
	User = require('./models/User'),
	router = express.Router();

	router.get('/users',function(req,res){
		User.find({},function(err,users){
			res.send(users);
		});
	});


	modules.exports = router;