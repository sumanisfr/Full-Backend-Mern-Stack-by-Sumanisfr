const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const crypto = require("crypto");
const path = require("path");
// const multer = require("multer");
const upload = require("./config/multerConfig");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Creating Disk Storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/images/uploads");
//   },
//   filename: function (req, file, cb) {
//     crypto.randomBytes(12, function (err, bytes) {
//       const fn = bytes.toString("hex") + path.extname(file.originalname);
//       cb(null, fn);
//     });
//   },
// });
// const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/upload", (req, res) => {
  res.render("profileUpload");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// Uploading a image using multer
app.post("/upload", isLoggedIn, upload.single("image"), async (req, res) => {
  // console.log(req.file);
  let user = await userModel.findOne({ emailL: req.user.emailL });
  user.profilePicture = req.file.filename;
  await user.save();
  res.redirect("/profile");
});

// Protected Route
app.get("/profile", isLoggedIn, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("posts");
  res.render("profile", { user });
});

app.post("/post", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  const { content } = req.body;
  let post = await postModel.create({
    user: user._id,
    content,
  });
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

// Like Features
app.get("/like/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");
  if (post.likes.indexOf(req.user.userId) === -1) {
    post.likes.push(req.user.userId);
  } else {
    post.likes.splice(post.likes.indexOf(req.user.userId), 1);
  }
  await post.save();
  res.redirect("/profile");
});

// Edit Features
app.get("/edit/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");
  res.render("edit", { post });
});
app.post("/update/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOneAndUpdate(
    { _id: req.params.id },
    { content: req.body.content }
  );
  res.redirect("/profile");
});

// Registation Functionality
app.post("/register", async (req, res) => {
  const { name, username, email, password, age } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(500).send({ message: "User already registered !!!" });
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        name,
        username,
        email,
        password: hash,
        age,
      });
      let token = jwt.sign({ email: email, userId: user._id }, "RRR");
      res.cookie("token", token);
      res.send("registered !!!");
    });
  });
});

// Login Functionality
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(500).send("Something went wrong !!!");
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userId: user._id }, "RRR");
      res.cookie("token", token);
      res.status(200).redirect("/profile");
    } else {
      res.redirect("/login");
    }
  });
});

// Logout Functionality
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

// isLoggedIn Middleware Functionality (Protected Route)
function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") {
    res.redirect("/login");
  } else {
    let data = jwt.verify(req.cookies.token, "RRR");
    req.user = data;
    next();
  }
}

app.listen(3000);
console.log("Server is running on port 3000");