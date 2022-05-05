//object that handles client requests and send back responses
//property of express
    //Router();

const express = require("express");
const { findById } = require("../models/User");
const router = express.Router();

//in order to use controllers module properties, import controllers module
const userControllers = require("./../controllers/userControllers")

//Retrieving array of documents from database using "GET" method and find() model method
router.get("/", (req, res) => {
    //check the request if there's data to be used
    //invoke the function from controllers
    userControllers.getAllUsers().then( result => {
        res.send(result)
    })
} )

//Add a user in the database using "POST" http method and saev() method
router.post("/add-user", (req, res) => {
    //check the request if there's data to be used
    console.log(req.body);

    //invoke the function from controllers
    userControllers.register(req.body).then( result => res.send(result))
});

//update user
router.put("/update-user", (req, res) => {

    userControllers.updateUser(req.body.email).then( result => res.send(result))
})

//delete user
router.delete("/delete-user", (req, res) =>{

    userControllers.deleteUser(req.body.email).then(result => res.send(result))
})

//Retrieve a specific user using two model methods
    //findOne()
    //findById()

router.get("/specific-user", (req,res) => {

    userControllers.getSpecificUser(req.body.email).then(result => res.send(result))
})

//61977ca3b47abeb3429ec40c
router.get("/:id", (req, res) => {
    //request
        //params ----> id
        //body
        //http methods
        console.log(req)
    userControllers.getById(req.params.id).then( result => res.send(result))

})


//in order for the routes to be use in other modules, we need to export it first
module.exports = router;