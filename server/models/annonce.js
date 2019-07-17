const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const annonceSchema = new Schema({
	user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
	updated_at: Date,
    description: {
		type: String,
		required: true
	},
    tarif : {
		type: Number,
		required: true
	},
	skill : {
		type: String,
		required: true
	},
	niveau: {
		type: String,
		required: true
	},
	departement: {
		type: Number,
		required:true
	},
	email: {
		type: String,
		required:true
	}
});

annonceSchema.pre('save', function(next) {
	if(this.isNew) {
		this.created_at = Date.now();
	}
	this.updated_at = Date.now();
	next();
});

module.exports = db.model('Annonce', annonceSchema);