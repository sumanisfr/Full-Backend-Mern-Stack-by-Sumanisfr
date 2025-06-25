const express = require("express");
const app = express();

const useModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/create", async (req, res) => {
  let createduser = await useModel.create({
    name: "Suman",
    username: "suman123",
    email: "suman@example.com",
    password: "password123",
  });

  res.send(createduser);
});

app.get("/update", async (req, res) => {
  let updateduser = await useModel.findOneAndUpdate(
    { name: "suman1213" },
    { username: "suman_updated_22" },
    { new: true }
  );

  res.send(updateduser);
});

app.get("/read", async (req, res) => {
  let users = await useModel.findOne({ username: "suman_updated_22" });
  res.send(users);
});

app.get("/delete", async (req, res) => {
  let deleteduser = await useModel.findOneAndDelete({
    username: "suman_updated_22",
  });
  res.send(deleteduser);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
