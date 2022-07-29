const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/Profile", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/Profile.json", "utf-8");
  res.send(info);
});

app.get("/about", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/Aboutme.json", "utf-8");
  res.send(info);
});

app.get("/age", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/age.json", "utf-8");
  res.send(info);
});

app.get("/description", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/description.json", "utf-8");
  res.send(info);
});
app.get("/major", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/major.json", "utf-8");
  res.send(info);
});

app.listen(3000);
