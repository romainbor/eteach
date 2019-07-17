const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

const router = express.Router();

// research with get params
router.get('/', function(req, res){
	User.find(req.query).then(data => res.send(data))
	.catch(data => rend.sendStatus(500));
});

// research with get params
router.get('/:username', function(req, res){
	User.findOne({user_name: req.params.username}).then(data => res.send(data))
	.catch(data => rend.sendStatus(500));
});

// subscribe user
router.post('/', function(req, res) {
	const user = new User(req.body);
	hash = bcrypt.hashSync(req.body.password.trim(), 10);
	user.password = hash,
	user.save(function(error, result){
		if(error) {
			(error);
			res.sendStatus(400);
		}
		res.status(201).send(result);
	});
});

// update user
router.put('/:user_id', function(req, res) {
	User.update({_id: req.params.user_id}, req.body).then(data => data ? res.status(201).send(data) : rend.sendStatus(404))
	.catch(data => rend.sendStatus(400));
});

//delete user
router.delete('/:user_id', function (req, res) {
  User.remove({_id: req.params.user_id}).then(data => data ? res.status(204) : rend.sendStatus(404))
	.catch(data => rend.sendStatus(500));
});

module.exports = router;