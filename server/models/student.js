const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    creation_date: Date,
    address: {
        street: String,
        city: {
            type: String,
            required: true
        },
        zip: Number
    },
    schoolLevel: String,
    wantedSubject: String,
    age: Number,
    reviews: {
    	id_user: String,
    	rate: Number,
    	comment: String
    }
});

module.exports = db.model('Bakery', studentSchema);