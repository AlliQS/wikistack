const morgan = require("morgan");
const express = require("express");
const { db } = require("./models");
const layout = require('./views/layout');

const app = express();

app.use(morgan("dev"));
app.use('./views',express.static("wikistack" + 'public'))

app.get("/", function(req, res) {
  res.send(layout(''));
});

const PORT = 1234;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})

db.authenticate().then(() => {
  console.log('connected to the database');
})
