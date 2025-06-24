const express = require("express");
const path = require("path");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, "public"))); // setting up public folder for static files

app.set("view engine", "ejs"); // setting up ejs as a view engine

app.get("/", function (req, res) {
  // res.send("Yes its working");
  res.render("index");
});

app.get("/profile/:username", function (req, res) {
  // const username = req.params.username;
  // res.send("This is " + username + "'s profile page");
  res.send(`This is ${req.params.username}'s profile page`);
});

app.get("/profile/:username/:age", function (req, res) {
  const { username, age } = req.params;
  res.send(`This is ${username}'s profile page. Age: ${age}`);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
