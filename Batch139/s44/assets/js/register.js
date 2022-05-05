console.log("hello")
let registerForm = document.getElementById("registerUser");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

let firstName = document.getElementById('firstName').value
let lastName = document.getElementById('lastName').value
let mobileNo = document.getElementById('mobileNo').value
let email = document.getElementById('email').value
let password = document.getElementById('pw').value
let cpw = document.getElementById('cpw').value

    if( password == cpw && mobileNo.length >= 11){

        fetch("http://localhost:4000/api/users/email-exists",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
        }).then( response => response.json()).then(response => {
            console.log(response) //true
            if(response){
                fetch("http://localhost:4000/api/users/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        mobileNo: mobileNo,
                        password: password
                    })
                }).then(response => response.json()).then(response => {
                    // console.log(response) //true

                    if(response){
                        alert(`Successfully Registered! You may now login`)

                        window.location.replace("./login.html")
                    } else {
                        alert(`Something went wrong. Please try again!`)
                    }
                })
            }
        })
    }

});
