//! from handling and working with the froms
//! handle backend process of froms and making sure the data coming from any frontend lib,fw,template engine , we still handle it at the backend.
// Form Handling Overview
// Form handling involves capturing user input, validating it, and processing it securely. Here's how it works across different layers:

// Frontend Form Handling (JavaScript)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  });
});

// Backend Form Handling (Node.js with Express)
const express = require("express");
const app = express();
app.use(express.json());

app.post("/submit", (req, res) => {
  const formData = req.body;

  // Validate and process the form data
  if (!formData.name || !formData.email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  // Simulate saving to a database
  console.log("Form data received:", formData);
  res
    .status(200)
    .json({ message: "Form submitted successfully", data: formData });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// This code demonstrates how to handle form submissions in a Node.js application using Express.
// The frontend captures form data and sends it to the backend, which processes and validates the input.
// The backend responds with success or error messages based on the validation results.

// This example includes a simple HTML form, JavaScript for handling the form submission, and a Node.js backend using Express to process the form data.
// Handle multiple content types
app.use("/api", (req, res, next) => {
  // Log what type of data we received
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("Body:", req.body);
  next();
});
// /* // Example CSRF protection
const csrf = require("csurf");
app.use(csrf({ cookie: true }));
