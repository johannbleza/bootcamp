
const express = require('express');
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//connect server to mongodb atlas
mongoose.connect("mongodb+srv://admin:admin@batch139.axzmg.mongodb.net/todo?retryWrites=true&w=majority");

//get notification if successfully connected or not
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to database`));

//Schema
const taskSchema = new mongoose.Schema(
	{
		name: String,
		status: {
			type: String,
			default: "pending"
		}
	}
);

//Models
const Task = mongoose.model("Task", taskSchema);

//ROUTES

/*Business Logic
1. Add a functionality to check if there are duplicate tasks
	- If the task already exists in the database, we return an error
	- If the task doesn't exists in the database, we add it in the database
2. The task data will be coming from the request's body
3. Create a new Task object with a "name" field property
4. The "status" property does not need to be provided because our schema defaults it to "pending" upon creation of an object
*/

app.post("/tasks", (req, res) => {
	// console.log(req.body)	//{ name: 'washing dishes' }

	//Model.findOne()
	Task.findOne({name: req.body.name}, (err, result) => {
		console.log(result)	//document

		if(result != null && result.name == req.body.name){
			return res.send("Duplicate task found")
			
		} else {
			let newTask = new Task({
				name: req.body.name
			})

			newTask.save((err, savedTask) => {
				if(err){
					return console.error(err)
				} else {
					return res.send(`New task created`)
				}
			})
		}
	})	
})


/*Business Logic
endpoint - /tasks

1. Retrieve all the documents
2. If an error is ecountered, print the error 
3. If no errors are found, send back to the client/postman array of documents
*/

app.get("/tasks", (req, res) => {

	//Model.method
	Task.find({}, (error, result) => {
		// console.log(typeof result);

		// let documents = JSON.stringify(result)

		// console.log(typeof documents);
		
		if(error){
			return console.log(error)
		} else {
			return res.send(result)
		}
	})
})




app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
