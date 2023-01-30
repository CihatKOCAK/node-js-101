const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h3>Hello World!</h3>");
});

app.get("/contact", (req, res) => {
  res.send("<h3>Contact me at: pcihatkocakk@gmail.com </h3>");
});

app.get("/about", (req, res) => {
  res.send(
    "<p>My name is Cihat Kocak. I am a developer in Kodris Componey </p>"
  );
});

app.get("/hobbies", (req, res) => {
  res.send("<ul><li>Reading</li><li>Writing</li><li>Listening Music</li></ul>");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
