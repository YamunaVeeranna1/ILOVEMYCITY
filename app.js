var exp = require("express");

var app = exp();

app.set('view engine', 'ejs');

var handlers = require("./routes/routes.js");

app.get('/', handlers.homeFn);

app.get('/:city', handlers.cityFn);

var port = process.env.PORT || 3333;
app.listen(port, function(){
	console.log("Https server on 3333");
});