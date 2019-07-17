const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	user_name: {
		type: String,
		unique: true,
		required: true
	},
	first_name: String,
    last_name: String,
	created_at: Date,
	updated_at: Date,
	description: {
		type: String,
		required : true
	},
	skills : {
		type: new Array(),
		required : true
	},
	email: {
		type: String, 
		unique: true,
		required: true,
		validate: /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/
	},
	password: {
		type: String, 
		required: true
	},
	category: {
		type : String,
		required: true
	}
});

userSchema.pre('save', function(next) {
	if(this.isNew) {
		this.created_at = Date.now();
	}
	this.updated_at = Date.now();
	next();
});

module.exports = db.model('User', userSchema);