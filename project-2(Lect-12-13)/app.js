const express = require("express");
const path = require("path");
const app = express();
const userModel = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // res.send("Hello, World!");
  res.render("index");
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read", { users });
});

app.get("/delete/:id", async (req, res) => {
  let { id } = req.params;
  await userModel.findByIdAndDelete(id);
  res.redirect("/read");
});

app.get("/edit/:userid", async (req, res) => {
  let user = await userModel.findById(req.params.userid);
  res.render("edit", { user });
});

app.post("/update/:userid", async (req, res) => {
  let { userid } = req.params;
  let { name, email, image } = req.body;

  let updatedUser = await userModel.findByIdAndUpdate(
    userid,
    { name, email, image },
    { new: true }
  );

  res.redirect("/read");
});

// app.post("/create", async (req, res) => {
//   const { name, email, image } = req.body;
//   await userModel
//     .create({ name, email, image })
//     .catch((err) => res.status(500).send(err));
// });

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createUser = await userModel.create({ name, email, image });
  // res.send(createUser);
  res.redirect("/read");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
