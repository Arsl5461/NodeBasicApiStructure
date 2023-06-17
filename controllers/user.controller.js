const User = require("../models/user.model");

exports.createUser = (req, res) => {
  res.json("User created");
};

exports.listUser = (req, res) => {
  res.json("User Fetched");
};
exports.listSingleUser = (req, res) => {
  res.json("Single User Fetched");
};
exports.deleteUser = (req, res) => {
  res.json("User Deleted");
};
exports.updateUser = (req, res) => {
  res.json("User Updated");
};
