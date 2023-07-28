// import all necessary packages
require("dotenv").config(); // shortcut
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

const app = express();

// environment variable
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

// meng-connect-kan nodejs ke mongodb
mongoose.connect(DB_URL);
// untuk menge-check koneksi ke mongodb
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.on("connected", () => {
  console.log("Database connecter");
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api/v1", router);

// GET

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
