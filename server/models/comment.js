const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const commentSchema = new Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    profile_username: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
}, { timestamps: true });


commentSchema.pre('save', function(next) {
	if(this.isNew) {
		this.created_at = Date.now();
	}
	this.updated_at = Date.now();
	next();
});

// export our module to use in server.js
module.exports = db.model('Comment', commentSchema);