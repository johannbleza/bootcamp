
const http = require("http");
const PORT = 4000;


//mock data
let directory = [
    {
        name:"Brandon",
        email:"brandon@gmail.com"
    },
    {
        name:"Robert",
        email: "robert@gmail.com"
    }
]

http.createServer((req, res) => {

    //endpoint /users
    //method is "GET"
    //response  should be the data from mock data
    if(req.url === "/users" && req.method === "GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(directory));
        res.end()
    }

    //endpoint /users
    //method is "POST"
    //response is to return the data that is being inserted in our mock data array
        //we must insert the data first in the mock data array

    if(req.url === "/users" && req.method === "POST"){

        let reqBody = "";

        req.on("data", (data) => {
            // console.log(typeof data)

            reqBody += data
        })

        req.on("end", () => {
            console.log(reqBody);
            // console.log(typeof reqBody); //("name": "Maria", "email": "maria@gmail.com")

            //parse the data to javascript object to be able to insert it in the mock data
            reqBody = JSON.parse(reqBody)
            // console.log(typeof reqBody); //object

            //now that reqBody is already a javascript object, we will use array method push to insert object in our array of objects mock data

            directory.push(reqBody)
            // console.log(directory)

            //now that we have successfully added our object into the array, we will now send a response back to the client

            res.writeHead(200, {"Content-type": "application/json"});
            res.write(JSON.stringify(directory))
            res.end()
        })

    }

}).listen(PORT, () => console.log(`Server is running at port ${PORT}`));