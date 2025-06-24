//! This is a note file for the project
// * Express.js Framework
// * Introduction to Express.js
// * Settting up a basic Express.js server
// * Routing in Express.js
// * Middleware in Express.js
// * Request and Response objects in Express.js
// * Error handling in Express.js

// *----------------------------------*
//! Express.js Framework
//! Introduction to Express.js
//? MERN Stack
//? MongoDB
//? Express.js
//? React.js
//? Node.js
// ---
// it is a npm package that is used to build web applications using Node.js. It is a minimal and flexible framework that provides a robust set of features for building web and mobile applications. Express.js is designed to make it easy to build web applications and APIs, and it is often used in conjunction with other technologies such as MongoDB, React.js, and Node.js.
// Framework is a set of tools and libraries that help developers build applications more easily and quickly. It provides a structure for the application, and it often includes features such as routing, middleware, and error handling. Express.js is a framework for building web applications using Node.js, and it provides a set of tools and libraries that make it easy to build web applications and APIs.
//  manage everything from receiving request and giving response to the client.
// *----------------------------------*
// then install express.js using npm
// npm install express
// ? npm i nodemon -g for global install
// ? nodemon script.js for run the server after save your code then it correct or run in your localhost or server.

// *----------------------------------*
//! Middleware.
// Middleware:- A function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
//! Request and Response objects in Express.js
// The request object (req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.
// The response object (res) represents the HTTP response that an Express app sends when it gets an HTTP request.
// Middleware functions can perform the following tasks:
// 1. Execute code.
// 2. Modify the request and response objects.
// 3. End the request-response cycle.
// 4. Call the next middleware function in the stack.
// If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. If no middleware function calls next(), the request will be left hanging.

//! Error Handling Middleware
// Error handling middleware is a special type of middleware that is defined with four arguments instead of three: (err, req, res, next).
// This middleware is used to catch and process errors that occur in the application.
