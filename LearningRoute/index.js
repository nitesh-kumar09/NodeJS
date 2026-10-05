const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is succfully connected..");
});

app.get("/", (req, res) => {
  res.send("<h1>Home Pages</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About Pages</h2>");
});

app.get("/about/user", (req, res) => {
  res.send("About user");
});

// Route Parameter

app.get("/about/:userId", (req, res) => {
  res.send(req.params);
});

// Nested Route parameter

app.get("/about/:userId/book/:bookId", (req, res) => {
  res.send(req.params);
});

// You can print one of the value

// app.get('/about/:userId/book/:bookId',(req,res)=>{
//     res.send(req.params.bookId)
// })

// You can use one Route with multiple id

app.get("/user/:userId-:bookId", (req, res) => {
  res.send(req.params);
});

// Query Paramenters
app.get("/search", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Search result for Name: ${name}, Age: ${age}`);
});

