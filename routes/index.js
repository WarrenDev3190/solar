var express = require('express'),
	router = express.Router();

	router.get('/',function(req,res){
		res.render('index',{test:'World'});
	});

	module.exports = router;