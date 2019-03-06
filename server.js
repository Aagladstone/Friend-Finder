

var express = require("express");
 var path = require("path");

 var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var PORT = process.env.PORT || 3001;

var friends = [];

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, function() {
    console.log("app listening on Port: " + PORT)
})