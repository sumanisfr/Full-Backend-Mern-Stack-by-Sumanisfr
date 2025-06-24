// initialize a project with npm
// express install
// npm init -y
// npm install express
// dynamic routing
// dynamic routing
// how to get data from frontend at backend route
// setting up parsers for form
// setting up ejs for ejs pages
//  install ejs = > npm install ejs
//  setup ejs as a middware for view engine.

// setting up public folder for static files

console.log(__dirname); // __dirname is a global variable in Node.js that contains the absolute path to the directory that contains the current executing script. It is useful for constructing paths to files and directories relative to the current script

console.log(__dirname + "/public"); // This will log the absolute path to the "public" directory, which is a subdirectory of the current script's directory. This is useful for serving static files in an Express application, as you can use this path to set up middleware that serves files from the "public" directory.

const path = require("path"); // path is a built-in Node.js module that provides utilities for working with file and directory paths. It allows you to manipulate and construct paths in a platform-independent way.
console.log(path.join(__dirname, "public")); // This will join the current directory (__dirname) with the "public" directory, creating a platform-independent path to the "public" directory. This is useful for serving static files in an Express application, as you can use this path to set up middleware that serves files from the "public" directory.

// dynamic routing:-
// Dynamic routing in Express.js allows you to create routes that can handle variable parts of the URL. This is useful for creating RESTful APIs or handling requests with parameters. You can define dynamic routes using route parameters, which are specified by a colon (:) followed by the parameter name in the route path.
