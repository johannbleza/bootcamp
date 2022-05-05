
const express = require("express");
const router = express.Router();

const userControllers = require("../controller/userControllers.js");


router.post("/add-user", (req, res) => {
	//receive request
	console.log(req.body)

	//send back response
		//invoke the function from the controllers
		//handle promise of response using .then()
		
		user.userControllers.then( (reject, resolve) => {
			console.log(resolve)
		// 	if(err){
		// 		res.send(err)
		// 	} else {
		// 		res.send(result)
		// 	}
		})

})

//Retrieve all documents from database
	// endpoint /users
	// method "get"
router.get("/users", (req, res) => {

	userControllers.getAll().then(result => res.send(result))
})


module.exports = router;