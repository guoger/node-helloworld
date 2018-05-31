var express = require("express"),
  app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.post("/register", function (req, res) {
  console.log(req.query);
  res.status(200).send("Hello " + req.query.email + "!");
});

app.listen(port);
console.log("Listening on port ", port);
