// const express = requ`ire("express");
// const app = express();
// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });
// app.listen(3000);   // // this will start the server on port 3000 and when you go to http://localhost:3000 in your browser, you will see "Hello World!" message.
// *----------------------------------*

// const express = require("express");
// const app = express();

// //! rout create
// // suman.com/  //like this
// // app.get(Router,requesthandler or callback function (req, res) {
// //   res.send("Hello World!");
// // });
// app.get("/", function (req, res) {
//   res.send("Champian suman in page");
// });

// // app.get("/about", function (req, res) {
// //   res.send("This is campiaon suman about page");
// // });

// //! Sarver start
// app.listen(4000, function () {
//   console.log("Server is running on port 4000");
//   console.log("http://localhost:4000");
// });

// ? npm i nodemon -g for global install
// ? nodemon script.js for run the server after save your code then it correct or run in your localhost or server.

// *--------------------*

const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("Middleware function called");
  next();
});

app.use(function (req, res, next) {
  console.log("Another middleware function called");
  next();
});

app.get("/", function (req, res) {
  res.send("Champian suman in page");
});

app.get("/about", function (req, res) {
  res.send("This is about page");
});
app.get("/profile", function (req, res, next) {
  // res.send("This profile page");
  return next(new Error("Profile page not found"));
});

//! error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something something went wrong!");
});

//! Sarver start
app.listen(4000, function () {
  console.log("Server is running on port 4000");
  console.log("http://localhost:4000");
});
