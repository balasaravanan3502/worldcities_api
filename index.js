const express = require("express");
const app = express();

const data = require("./data.json");

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/city/", (req, res) => {
  let suggestions = [];
  let string = req.query.string;

  data.forEach((doc) => {
    if (doc.city.toLowerCase().includes(string.toLowerCase())) {
      console.log(doc, 0);
      suggestions.push(doc);
    }
  });

  res.send(suggestions);
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
