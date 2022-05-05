console.log("login page")
const loginForm = document.getElementById("loginUser")

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    fetch("http://localhost:4000/api/users/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
    ).then( response => response.json())
    .then(response => {
        console.log(response) //object ---> access token

        // localStorage
            //setItem("name", data)
            //getItem("property name")
        
        localStorage.setItem("token", response.access)

        if(response.access){

            let token = localStorage.getItem("token")
            fetch("http://localhost:4000/api/users/details",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application",
                    "Authorization": `Bearer ${token}`
                }
            }).then(response => response.json()).then( 
                response => {
                    console.log(response)
                    const {isAdmin, _id} = response

                    localStorage.setItem("isAdmin", isAdmin)
                    localStorage.setItem("userId", _id)

                    window.location.replace("./courses.html")
                }
            )
        }
    })
})