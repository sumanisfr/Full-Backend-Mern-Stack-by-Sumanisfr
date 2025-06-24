const fs = require("fs");

// writefile
// appendFile
// copyFile
// rename
// unlink

// fs.writeFile("test.txt", "Hello World", function (err) {
//   // if (err) throw err;
//   if (err) console.error("Error writing file:", err);
//   else {
//     console.log("File created successfully!");
//   }
// });

// fs.appendFile("test.txt", "add like suman", function (err) {
//   // if (err) throw err;
//   if (err) console.error("Error updating file:", err);
//   else {
//     console.log("File updated successfully!");
//   }
// });

// fs.rename("test.txt", "hello.txt", function (err) {
//   // if (err) throw err;
//   if (err) console.error("Error renaming file:", err);
//   else {
//     console.log("File renamed successfully!");
//   }
// });

// fs.copyFile("hello.txt", "copy.txt", function (err) {
//   // if (err) throw err;
//   if (err) console.error("Error copying file:", err);
//   else {
//     console.log("File copied successfully!");
//   }
// });

// fs.copyFile("hello.txt", "./copyfile/copynew.txt", function (err) {
//   // if (err) throw err;
//   if (err) console.error("Error copying file:", err);
//   else {
//     console.log("File copied successfully!");
//   }
// });

// fs.unlink("copyfile/copynew.txt", function (err) {
//   // if (err) throw err;
//   if (err) console.error("Error deleting file:", err);
//   else {
//     console.log("File deleted successfully!");
//   }
// });

// fs.rmdir("./copyfile", { recursive: true }, function (err) {
//   // if (err) throw err;
//   if (err) console.error("Error deleting directory:", err);
//   else {
//     console.log("Directory deleted successfully!");
//   }
// });

// fs.mkdir("./newaddfile", function (err, files) {
//   if (err) {
//     console.error("Error reading directory:", err);
//   } else {
//     console.log("Files in directory:", files);
//   }
// });

// const http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World\n");
//   })
//   .listen(3000, "127.0.0.1");
// console.log("Server running at http://127.0.0.1:3000/");
// To run this server, use the command: node script.js
// To test the server, open a web browser and go to http://127.0.0.1:3000/

// To stop the server, press Ctrl+C in the terminal where the server is running.
