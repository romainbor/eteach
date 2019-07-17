const express = require('express');
const Comment = require('../models/comment');

const router = express.Router();

router.get('/', (req, res) => {
  Comment.find((err, comments) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: comments });
  });
});

router.get('/:user_id', (req, res) => {
  Comment.find({profile_username: req.params.user_id}).then(data => res.send(data))
	.catch(data => rend.sendStatus(500));
    });
  
router.post('/create', (req, res) => {

const comment = new Comment(req.body);

  comment.save(function(error, result){
    if(error) {
      (error);
      res.sendStatus(400);
    }
    res.status(201).send(result);
  });
});

module.exports = router;