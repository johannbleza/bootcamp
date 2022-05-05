const http = require("http");
const port = 4000;

http.createServer((req, res) => {

    if(req.url === "/System"){
        res.writeHead(200, {"Content-type": "text/plain"});
        res.write("Welcome to Booking System");
        res.end()
    } else if (req.url === "/profile"){
        res.writeHead(200, {"Content-type": "text/plain"});
        res.write("Welcome to your profile!");
        res.end()
    } else if (req.url === "/courses"){
        res.writeHead(200, {"Content-type": "text/plain"});
        res.write("Here's our courses available");
        res.end()
    } else if (req.url === "/addcourse" && req.method === "POST"){
        res.writeHead(200, {"Content-type": "text/plain"});
        res.write("Add a course to our resources");
        res.end()
    } else if (req.url === "/updatecourse" && req.method === "PUT"){
        res.writeHead(200, {"Content-type": "text/plain"});
        res.write("Update a course to our resources");
        res.end()
    } else if (req.url === "/archivecourse" && req.method === "DELETE"){
        res.writeHead(200, {"Content-type": "text/plain"});
        res.write("Archive courses to our resources");
        res.end()
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("Request cannot be completed")
        res.end();
    }
}).listen(port, () => console.log(`Server is running at port ${port}`))