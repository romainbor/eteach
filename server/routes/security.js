const express = require('express');
const createToken = require('../libs/auth').createToken;
const User = require('../models/user');
const router = express.Router();
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

//verif username/password(hashé) avec la base

router.post('/login_check', (req, res) => {
	const password = req.body.password;
    const fetchUser = User.findOne({user_name: req.body.username}, function(error, result) {
		const user = result;
	    if(user) {
			bcrypt.compare(password, user.password)
			.then(isMatch => {
				if(isMatch) {
					const token = createToken({
						username: req.body.username
					});

					res.send({
						user,
						token
					});
				}
				else {
					res.status(403).send({
						error: "Invalid username/password"
					});
				}
			})
			
		}
	   
	});
})

router.get('/skills', (req, res) => {
    const fetchUser = User.findOne({user_name: req.query.username}, function(error, result) {
		const user = result;
		const user_skill = result.skills;
	    if(user) {
	        res.send({
	            user_skill
	        });
	    } else {
	        res.status(404).send({
	            error: "User not found"
	        });
	    }
	});
})
module.exports = router;