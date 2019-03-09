

var friendsData = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
  res.json(friendsData);
});



app.post("/api/friends", function(req, res) {
  
  friendsData.push(req.body);
  res.json(true);
  //INSERT comparison logic here

  // for(var i = 2; i < friendsData.length; i ++) {
  //     var sum =+ parseInt(friendsData[i]);
  //     console.log(sum);
      
  // }
}); 

};