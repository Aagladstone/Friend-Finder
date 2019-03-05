







app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/servey", function(req, res) {
    res.sendFile(path.join(__dirname, "servey.js"));
  });
  