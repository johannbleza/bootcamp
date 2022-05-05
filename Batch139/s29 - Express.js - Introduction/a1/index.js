const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/home", (req, res) => res.send("Welcome to the Home Page"))

app.get("/users", (req, res) => {
    res.send(req.body)
})

app.delete("/delete-users", (req, res) => {
    res.send(`User ${req.body.username} has been deleted`)
} )


app.listen(PORT, () => console.log(`Server running at port ${PORT}`))