//to start, use git init command to initialize node package manager
	//once node package manager was initialized, you can now start installing other packages using npm install <package> command
//use express.js as a framework of node.js, we need to install it
const express = require("express");
const app = express();
// http.createServer(() =>{}).listen()
const PORT = 4000;

/*middleware*/
app.use(express.json());
	//allows the server to handle data from requests
	//It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.urlencoded({extended: true}));
	//allows the server to handle data from requests coming from forms and tables
	//It parses incoming requests with JSON payloads and is based on body-parser.


/*ROUTES*/
//server.method("endpoint", (req, res)=> {})
app.get("/", (req, res) => res.send(`Hello World!`) );

/*Mini Activity
	Create a route with the following details:
	- enpoint is /hello
	- method is get
	- response `Hello from the /hello enpoint`

*/
app.get("/hello", (req, res) => res.send(`Hello from the /hello enpoint`))

/*Mini Activity
	Create a route with the following details:
	- enpoint is /greeting
	- method is post
	- response must be `Hello there, <dynamic value from the client>!`
*/
app.post("/greeting", (req, res) => {
	//req
		//url
		//body
		//method

	console.log(req.body)
    // name = req.body.name
	res.send(`Hello there, ${req.body.name}!`)
})


app.listen(PORT, console.log(() => `Server running at port ${PORT}`));


