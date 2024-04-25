const mongoose = require("mongoose");

DB_URL = 'mongodb://192.168.1.35:27017';
mongoose.connect(DB_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;
