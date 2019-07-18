const mongoose = require('mongoose');

const dbRoute = "mongodb+srv://romain:Pepevador80@cluster0-unpzv.mongodb.net/test"

mongoose.connect(dbRoute, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {throw new Error('Connection failed')});
db.on('open', function () { console.log('Connected')});

module.exports = db;