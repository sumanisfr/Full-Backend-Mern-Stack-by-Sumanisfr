// //! cookies set and read in express.js
// //  before running the code, make sure to run `npm install express ` to install the required dependencies.

// const cookieParser = require("cookie-parser");
// const express = require("express");

// const app = express();

// // npm i cookie-parser    for cookies

// app.use(cookieParser());

// app.get("/", function (req, res) {
//   res.cookie("name", "suman");
//   res.send("Cookie has been set");
// });
// // then run npx nodemon app.js

// app.get("/read", function (req, res) {
//   // Reading the cookie
//   console.log(req.cookies); // This will log the cookies sent by the client
//   res.send("Cookie has been read by the server");
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// //! Hashing and verifying passwords with bcrypt

// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");

// // app.get("/", function (req, res) {
// //   // copy from npm docs search bcrypt
// //   bcrypt.genSalt(10, function (err, salt) {
// //     bcrypt.hash("sumanisfr", salt, function (err, hash) {
// //       // sumanisfr -> $2b$10$zN9qjTlD4h8IxJ7jPMXcSekB7PXIq2x6TkIeBxOTd/Lo9ZLddks8u  (it change per second) -> $2b$10$KQ.jmjk6JydnkrR6a6YfWuWcC1T4P9ndSWLkhh6RCVVMIgr4ieIW6
// //       console.log(hash);
// //     });
// //   });
// // });

// // app.get("/", function (req, res) {
// //   bcrypt.compare(
// //     "sumanisfr",
// //     "$2b$10$KQjmjk6JydnkrR6a6YfWuWcC1T4P9ndSWLkhh6RCVVMIgr4ieIW6",
// //     function (err, result) {
// //       // result == true
// //       // result == false
// //       console.log(result);
// //     }
// //   );
// // });

// app.get("/read", function (req, res) {
//   res.send("read by the server");
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// //! jwt
// // jwt:- JSON Web Token
// // A secure way to transmit information between parties as a JSON object
// // Used for authentication and authorization in web applications
// // Contains three parts: header.payload.signature

// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");

// app.use(cookieParser());

// app.get("/", function (req, res) {
//   let token = jwt.sign({ email: "sumankumar@gmail.com" }, "secret");
//   res.cookie("token", token);
//   console.log(token);
//   res.send("done");

//   // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1bWFua3VtYXJAZ21haWwuY29tIi
//   // wiaWF0IjoxNzUxMTEyMzA3fQ.bLu9Y37T6uvAl7108RLj_Nr0jya19XbGTgLGx_5EtQU   (got type of encoding value)
// });

// app.get("/read", function (req, res) {
//   // console.log(req.cookies.token);
//   let data = jwt.verify(req.cookies.token, "secret");
//   console.log(data);
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// !-----------Continuing Lect-15 from here---------!//

const express = require("express");
const app = express();
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const path = require("path");
const cookieParser = require("cookie-parser");
const { hash } = require("crypto");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", function (req, res) {
  // res.send("welcome");
  res.render("index");
});

app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;

  // bcrypt add for hasg
  bcrypt.genSalt(10, (err, salt) => {
    // console.log(salt);
    // if(err) return
    bcrypt.hash(password, salt, async (err, hash) => {
      // password = hash;
      // console.log(hash);

      // Validate and create user
      let createUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });
      //jwt sign

      let token = jwt.sign({ email }, "secret");
      res.cookie("token", token);

      // await createUser.save();
      res.send(createUser);
    });
  });
});

// login
app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", async function (req, res) {
  let user = await userModel.findOne({ email: req.body.email });
  console.log(user);
  if (!user) return res.send("Something is went wrong"); //for email

  // console.log(user.password,req.body.password);  //formate like this
  bcrypt.compare(req.body.password, user.password, function (err, result) {
    // console.log(result);
    if (result) {
      let token = jwt.sign({ email: user.email }, "secret");
      res.cookie("token", token);
      res.send("yes you can login");
    } else res.send("no you can't login"); //for not correct
  });
});

// logout
app.post("/logout", function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
