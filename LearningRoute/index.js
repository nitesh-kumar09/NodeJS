const express = require("express");

const app = express();


// ========================================
// Start Express Server
// ========================================

app.listen(3000, () => {
  console.log("Server is successfully connected on port 3000");
});


// ========================================
// 1. Basic / Static Routes
// ========================================

// Home Route
// URL: GET /
// This route matches only the "/" path.

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});


// About Route
// URL: GET /about
// This is also a static route.

app.get("/about", (req, res) => {
  res.send("<h2>About Page</h2>");
});


// Another Static Route
// URL: GET /about/user

app.get("/about/user", (req, res) => {
  res.send("About User");
});


// ========================================
// 2. Route Parameter / Dynamic Route Parameter
// ========================================

// :userId is a dynamic route parameter.
//
// Example URL:
// GET /about/101
//
// req.params:
// {
//   userId: "101"
// }

app.get("/about/:userId", (req, res) => {
  res.send(req.params);
});


// ========================================
// 3. Multiple / Nested Route Parameters
// ========================================

// We can have multiple dynamic parameters
// in the same route.
//
// Example URL:
// GET /about/101/book/500
//
// req.params:
// {
//   userId: "101",
//   bookId: "500"
// }

app.get("/about/:userId/book/:bookId", (req, res) => {
  res.send(req.params);
});


// ========================================
// 4. Accessing a Specific Route Parameter
// ========================================

// Instead of sending the complete req.params object,
// we can access a specific parameter.
//
// Example URL:
// GET /about/101/book/500
//
// req.params.bookId
// Result: "500"

/*
app.get("/about/:userId/book/:bookId", (req, res) => {
  res.send(req.params.bookId);
});
*/


// ==============================================
// 5. Multiple Parameters in a Single URL Segment
// ==============================================

// We can use multiple parameters in one URL segment.
//
// Here "-" separates userId and bookId.
//
// Example URL:
// GET /user/101-500
//
// req.params:
// {
//   userId: "101",
//   bookId: "500"
// }

app.get("/user/:userId-:bookId", (req, res) => {
  res.send(req.params);
});


// ========================================
// 6. Query Parameters
// ========================================

// Query parameters are added after "?" in the URL.
//
// Example URL:
// GET /search?name=Nitesh&age=22
//
// req.query:
// {
//   name: "Nitesh",
//   age: "22"
// }
//
// Query parameters are commonly used for:
// - Search
// - Filtering
// - Sorting
// - Pagination
// - Optional parameters

app.get("/search", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  res.send(`Search result for Name: ${name}, Age: ${age}`);
});