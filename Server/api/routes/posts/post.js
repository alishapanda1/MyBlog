var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var Post = require('../../../models/posts/post');
var config=require('../../../config/config.json');
var app = express();

// app.set('superSecret', config.secret);
// Route to get all movies and save a movie
/*router.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, app.get('superSecret'), function(err, decoded) {
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});

	}

});*/
router.route('/posts')
// Get all movies
  .get(function(req, res){
    console.log("i am getting");
      Post.find(function(err, posts) {
            if (err){
              console.log("Error here");
                res.send(err);
              }

            res.json(posts);
        });
    });
// Search and save the movie
router.route('/posts/add')
    .post(function(req, res) {

          console.log("i am posting");
        var post = new Post();
        post.Title = req.body.Title;
        post.Content=req.body.Content;
        post.DatePosted=Date();
        post.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Post added!' });
              });


            });

router.route('/posts/Delete')
            .post(function(req, res) {
              console.log("deleteinhh");
                Post.remove({
                    Title: req.body.Title
                }, function(err, post) {
                    if (err)
                        res.send(err);
                    res.json({ message: 'Successfully deleted' });
                });
            });

        // Add Movie route

    module.exports= router;
