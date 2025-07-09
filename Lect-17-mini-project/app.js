// Lect-17,18,19
// user post likh paayenge 
// user create karne hai
//  login and register
// logout
// post creation
// post like 
// post delete
// post update 
// *------------------------------------------* //



const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');  
});


app.get('/profile', isLoggedIn, async (req, res) => {
    const user = await userModel.findById(req.user.userid).populate('posts');
    res.render('profile', { user });
});

app.post('/register', async (req, res) => {
   let { username, name, age, email, password } = req.body;
   const user = new userModel({ username, name, age, email, password });
   let existingUser = await userModel.findOne({ email: email });
   if (existingUser) return res.status(500).send('User already exists');
   bcrypt.genSalt(10, (err, salt) => {
       bcrypt.hash(password,salt,async (err, hash) => {
        // console.log(hash);
         let user = await userModel.create({ username, name, age, email, password: hash });

         const token = jwt.sign({ email: email, userid: user._id }, "secretKey");
         res.cookie('token', token);
         res.send("User registered successfully");
    });
});
    res.status(201).send('User registered successfully');
  });





app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) return res.status(404).send('User not found'); 
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) return res.status(500).send('Error comparing passwords');
        if (!result) return res.status(401).send('Invalid password');
        
        // Generate JWT token here (not implemented in this example)
        const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });
        
        res.cookie('token', 'your_jwt_token_here'); // Set the cookie with the token
        res.status(200).send('Login successful');
    });
});


app.get('/logout', (req, res) => {
    res.clearCookie('token'); // Clear the cookie
    res.redirect('/login'); // Redirect to login page
});

function isLoggedIn(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }
    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }
        req.user = decoded;
        next();
    });
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 