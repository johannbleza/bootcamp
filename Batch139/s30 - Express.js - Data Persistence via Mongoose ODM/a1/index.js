const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://admin:admin@batch139.axzmg.mongodb.net/users?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to database"))


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/signup", (req, res)=> {
    User.create({
        userName: req.body.username,
        password: req.body.password
    })
})

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))