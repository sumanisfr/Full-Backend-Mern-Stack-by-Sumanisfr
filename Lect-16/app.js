const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", function (_req, res) {
  res.send("hey");
});

app.get("/create", async function (_req, res) {
  // res.send("create ho gaya");
  let user = await userModel.create({
    username: "Suman",
    age: 21,
    email: "suman@gmail.com",
  });
  res.send(user);
});

app.get("/post/create", async function (_req, res) {
  // res.send("post create ho gaya");
  let post = await postModel.create({
    postdata: "This is a post",
    user: user._id,
  });
  let user = await userModel.findOne({ _id: user._id });
  user.post.push(post._id);
  await user.save();
  res.send({ post, user });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
