// require express
var express 	= require("express");
var path 		= require("path");

// create router object
var router = express.Router();

// export router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
	res.render("pages/index");
});

// route for 1&1's bullshit
router.get('/defaultsite', function(req, res) {
	res.render("pages/index");
});

// route for about page
router.get('/about', function(req, res) {
	res.render("pages/about");
});

// route for team page
router.get('/team', function(req, res) {
    var users = [
        { name: "Jason Lalor", role: "Developer", avatar: "", email: ""},
        { name: "Liz Vernon", role: "Designer", avatar: "", email: ""},
        { name: "Ico Romero", role: "Project Manager", avatar: "", email: ""},
        { name: "Scott Delea", role: "Marketing Strategist", avatar: "", email: ""}
    ];
	res.render("pages/team", { users: users });
});

// route for about page
router.get('/maps', function(req, res) {
	res.render("pages/maps");
});