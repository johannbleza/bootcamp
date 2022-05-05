let http = require("http");
    //http module has methods
    //to create server, we use createServe()

http.createServer( (request, response) => {
    //statement
    // console.log("Hello")
    // console.log(request)
        //url
        //body
        //method (http method)


//endpoint /profile
    if(request.url === "/profile" && request.method == "GET"){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Welcome to my page!");
        response.end();
    }


    //Mini Activity
    // using else if
    // endpoint is /profile
    // http method is "POST"
    // response "Data to be send to the database"

    else if(request.url === "/profile" && request.method === "POST"){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Data to be send to the database")
        response.end();
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Request cannot be completed")
        response.end();
    }

}).listen(3000);

console.log("Server is now running at localhost:3000")