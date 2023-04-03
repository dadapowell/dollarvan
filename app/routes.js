// require express
var express 	= require("express");
var path 		= require("path");

// create router object
var router = express.Router();

// export router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
	res.render("pages/en/index");
});

// route for 1&1's bullshit
router.get('/defaultsite', function(req, res) {
	res.render("pages/en/index");
});
