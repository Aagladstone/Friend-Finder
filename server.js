

var express = require("express");
var path = require("path");

 var app = express();



var PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Create set of routes that display tables data as JSONs
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
// });

// app.get('/survey', function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });

// app.get('/friends', function(req, res) {
//     res.readFile(path.join(__dirname, "app/data/friends.js"))
// });

app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT)
})