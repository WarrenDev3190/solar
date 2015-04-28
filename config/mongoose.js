var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost:27017/testDB');

	module.exports = mongoose;