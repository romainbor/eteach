const express = require('express');
const Annonce = require('../models/annonce');


const router = express.Router();

router.get('/', function(req, res) {
    Annonce.find(function(err, annonce) {
        if (err) {
            (err);
        } else {
            res.json(annonce);
        }
    });
});


// subscribe annonce
router.post('/create', function(req, res) {
	const annonce = new Annonce(req.body);

	annonce.save(function(error, result){
		if(error) {
			(error);
			res.sendStatus(400);
		}
		res.status(201).send(result);
	});
});

module.exports = router;