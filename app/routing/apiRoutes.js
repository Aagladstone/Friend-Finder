




var friendsData = require("../data/friends");
// var surveyData = require("../public/survey")

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
  res.json(friendsData);
});

// app.get("/api/survey", function(req, res) {
//   res.json(surveyData);
// })

app.post("/api/friends", function(req, res) {
  friendsData.push(req.body);
  res.json(true);
}); 

};



// app.get('/api/friends', function(req, res){
//   res.json(friends); // sends content from tables to URL as JSON
// });

// app.post("/api/friends", function(req, res){ // NOTE: request, is to receive data. res , is to send data
//   // Create a variable to request/store data from the form
//   var reservation = req.body;

//   // There are only 5 tables therefore we check if there are any tables avaliable and then push the data to the appropriate array
//   if (tables.length < 5){
//       tables.push(reservation);
//       res.json({reservation: true}); // This creates an object with the property of reservation. Reservation has the value true or false depending on table availibility 
//       console.log(reservation);
//   }
//   else{
//       waitlist.push(reservation);
//       res.json({reservation: false});
//   }
// });