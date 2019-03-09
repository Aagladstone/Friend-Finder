

var friendsData = require("../data/friends");
var fs = require("fs");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
  res.json(friendsData);

});



app.post("/api/friends", function(req, res) {
  
  friendsData.push(req.body);
  res.json(true);
  //INSERT comparison logic here
  // I think here we need a combination of fs.readFile or appendFile, or it goes in survey.html.
  // then I write a for loop based on friends[i].scores and subtract one from another then use Math.abs() and create a total variable.
  //We put that in a variable and compare that varible between all of the scores. 
  //

}); 

};