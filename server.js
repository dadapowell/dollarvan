var express = require("express"),
	app = express(),
    expressLayouts = require("express-ejs-layouts"),
	router = require("./app/routes");


// use ejs and express layouts
// must come before router
app.set("view engine", "ejs");
app.use(expressLayouts);

// route our app
app.set("port", (process.env.PORT || 8080));
app.use("/", router);

// set directory for static files
app.use(express.static(__dirname + "/public"));

// start the server
app.listen(app.get("port"), function(){
	console.log("app started");
});