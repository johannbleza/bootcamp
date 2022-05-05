console.log("Hello")

//syntax:
    //fetch("url/endpoint", {})

//get all posts
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
}).then( response => response.json()).then(
    (response) => {
        console.log(response)
    }
)

//get specific posts
fetch("http://jsonplaceholder.typicode.com/posts/1").then(
    (response) => response.json()
).then( json => console.log(json))

//post method
fetch("http://jsonplaceholder.typicode.com/posts/1", {
    method: "POST", 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "New post",
        body: "Hello World",
        userId: 2
    })
}).then( response => )