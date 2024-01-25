const express = require("express");
const app = express();
const port = 3000;
const movieSearch = require("./movieSearch.js");

//TODO: this may need to change to match what the movie api is, will need to check docs later
app.use("/movieSearch", movieSearch);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
