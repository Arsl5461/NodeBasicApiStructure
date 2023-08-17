const mongoose = require("mongoose");

const dbConnection = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/MyDb")
    .then(() => {
      console.log("Mongodb Connected");
    })
    .catch((error) => {
      console.error("Error connecting mongodb!");
    });
};

module.exports = dbConnection;
