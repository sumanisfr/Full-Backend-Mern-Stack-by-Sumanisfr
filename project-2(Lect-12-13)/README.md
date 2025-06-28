# express-ejs-mongo-crud

A simple and efficient CRUD (Create, Read, Update, Delete) web application built with **Express.js**, **EJS templating**, and **MongoDB (via Mongoose)**. This app allows users to manage (create, view, update, delete) user profiles, including name, email, and image fields.

---

## 🚀 Features

- Create user profiles
- View all users in a list
- Edit user details
- Delete users
- Server-side rendering using EJS
- MongoDB + Mongoose integration
- Clean routing and form handling

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS (Embedded JavaScript Templates)**
- **MongoDB**
- **Mongoose**
- **HTML/CSS (via public folder)**

---

## 📁 Project Structure

```
express-ejs-mongo-crud/
│
├── models/
│   └── user.js          # Mongoose schema
│
├── public/              # Static files (CSS, images, etc.)
│
├── views/
│   ├── index.ejs        # Home page
│   ├── read.ejs         # List of users
│   └── edit.ejs         # Edit user form
│
├── app.js               # Main server file
├── package.json
└── README.md
```

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/express-ejs-mongo-crud.git
cd express-ejs-mongo-crud
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up MongoDB**

Make sure you have MongoDB installed and running locally, or use MongoDB Atlas and connect via URI.

If you're using a .env file, add your MongoDB URI as `MONGODB_URI`.

4. **Start the server**

```bash
node app.js
```

Server will run at: http://localhost:3000

---

## 📌 Routes Overview

| Method | Route | Description |
|--------|--------|-------------|
| GET | `/` | Home page |
| GET | `/read` | View all users |
| POST | `/create` | Create a new user |
| GET | `/edit/:userid` | Render edit form |
| POST | `/update/:userid` | Update user data |
| GET | `/delete/:id` | Delete user |

---

## 🧪 Example User Schema

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String
});

module.exports = mongoose.model("User", userSchema);
```

---

## 🙌 Contributing

Feel free to fork this project, improve it, and create pull requests. Contributions are always welcome!

---

## 📃 License

This project is licensed under the MIT License.

---

## 📫 Contact

If you have any questions or feedback, feel free to reach out.