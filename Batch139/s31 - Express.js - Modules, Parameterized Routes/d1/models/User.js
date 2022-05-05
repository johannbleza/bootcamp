//models module

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	userName: String,
	password: String
});

module.exports = mongoose.model("User", userSchema);