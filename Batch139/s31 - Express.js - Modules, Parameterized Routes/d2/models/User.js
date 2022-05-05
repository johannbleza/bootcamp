//in order to use mongoose properties and methods, import mongoose module

const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Firstname is required"]
        },
        lastName: {
            type: String,
            required: [true, "Lastname is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"]
        },
        password:{
            type: String,
            required: ["Password is required"]
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        mobileNo: {
            type: String,
            required: [true, "Mobile number is required"]
        }
    }
)

//model
    // we make model out of the schema because model has methods that can manipulate and query database
module.exports = mongoose.model("User", userSchema)
