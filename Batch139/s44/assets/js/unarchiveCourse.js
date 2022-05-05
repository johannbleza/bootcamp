console.log("Archive page")

console.log(window.location.search)
// fetch(`http://localhost:4000/api/${}/unarchive`)

let params = new URLSearchParams(window.location.search)
let courseId = params.get("courseId")
console.log(courseId)
let token = localStorage.getItem("token")

fetch(`http://localhost:4000/api/courses/${courseId}/archive`,
    {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
).then( response => response.json())
.then(response => {
    console.log(response)

    if(response){

        window.location.replace("./courses.html")
    }
})