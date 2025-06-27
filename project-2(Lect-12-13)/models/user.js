const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
});

// const userModel = mongoose.model("User", userSchema);
// module.exports = userModel;

module.exports = mongoose.model("User", userSchema);
