const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");
const { Router } = require("express");
const mongodb = require("mongodb");
const logger = require("morgan");
const api = require("./routes/api.js")
// express and the many M's
const app = express();

//establish home port
const PORT = process.env.PORT || 3000;




app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(api);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
