const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("views"));
app.use(express.static("views/style/styles.css"));
// app.use(express.static("views/style/main.css"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/menu", (req, res) => {
  res.render("menu");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/courses", (req, res) => {
  res.render("courses");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
