const morgan = require("morgan");
const express = require("express");

const app = express();

app.use(morgan("dev"));
app.use("/", express.static("wikistack" + "public"));

app.get("/", function(req, res) {
  res.end(console.log("hello world"));
});
