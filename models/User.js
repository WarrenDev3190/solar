var mongoose = require('../config/mongoose'),
	bcrypt = require('bcrypt');
	Schema = mongoose.Schema;

	var UserSchema = new Schema({
		username : {type:String, required:true, unique:true},
		password : {type:String, required:true},
		joinDate : {type:Date, defaut: Date.now()}
	});

	UserSchema.methods = function generateHash(pass){
		return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), null);
	}

	UserSchema.methods = function validPassword(pass){
		return bcrypt.comparSync(pass,this.pass);
	}

	var User = mongoose.model('User',UserSchema);

	module.exports = User;