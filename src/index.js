const express = require("express");
const session = require("express-session");
const app = express();
const port = process.env.port || 3001;

app.set("view engine", "ejs");

app.use(express.static("views"));
app.use(express.static("views/style/styles.css"));
app.use(express.static("views/style/404.css"));
// app.use(express.static("views/style/login.css"));

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/admin", (req, res) => {
//   req.session.isAdmin = true;
//   res.render("login");
// });

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

app.all("*", (req, res) => {
  res.render("404");
});
