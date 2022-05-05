
// npm init
// npm install express
// npm install nodemon
    //add script
        // "start": "nodemon index.js"
// create a file named .gitignore
    // /node_modules

// const e = require("express");
const express = require("express");
const app = express();
const PORT = 4000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ROUTES
    //endpoints
    //request listener
    //http methods

app.get("/", (req, res) => res.send(`Welcome to my page!`));
app.post("/login", (req, res) => {
    let name = req.body.name
    res.send(`${name} successfully logged in!`)
});

//Mini Activity
    // Create a users mock database that is an empty array
    // Conditions:
        // - if username and password are not empy string, push the documents in the array and return a response "User <name> successfully registered!"
        // - if username and password are empty string, return a respons "Please fill out the complete information."
        // - endpoint is "/signup"

let users = []

app.post("/signup", (req, res) => {
    let userName = req.body.username;
    let passWord = req.body.password;

    if (userName.length !== 0 && passWord.length !== 0){
        res.send(`User ${userName} successfully registered!`)
        users.push(req.body);
    } else{
        res.send(`Please fil out the complete information`)
    }

    console.log(users)
})
// Mini Activity - update password
    // Use put method
    //endpoint is /change-password
    // -if the given username by the client matched the existing username in the aray, assign the new password to that document(use for loop)
    // return a respons "User <name's password hasbeen updated'"
    // -if username doesn't matched any username in the array, return a respons "User does not exist."
app.put("/change-password", (req, res) => {
    let userName = req.body.username;
    let passWord = req.body.password;

    for(let i = 0; i < users.length; i++){
        if (users[i].username == userName){
            users[i].password = passWord

            res.send(`User ${userName}'s password has been updated'`)
        } else {
            res.send(`User does not exist`)
        }
    }
})

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))