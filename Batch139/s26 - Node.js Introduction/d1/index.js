// the require() function allows us to use built-in Node.js modules. It is similar to <script></script>

//HTTP - Hyper Text Transfer Protocol - is a protocol that allows the fetching of resources such as HTML documents. We will use this for the mean time to transfer data

let http = require("http");

//Clients (frontend) and servrs (node JS, express JS application) communicate by exchanging individual messages
//The messages sent by the client, usually a web browser, are called request
//The message send by the server as an answer are called response.

//Using this module's createServer() method, we can create an HHTP server that listens to requests on a specified port and gives response back to the client

http.createServer(function(request, response) {

    //Use the writHead() method to set a status code for the response - 200 means OK
    //Set the content type of the response as a plain text message
    response.writeHead(200, {'Content-Type': 'application/json'});
    //We used the response.end() method to end the response process.
    response.end(`Hello World`);

    
}).listen(4000) //The server will be assigned to port via the method listen()

console.log(`Server is running at localhost:4000`)
