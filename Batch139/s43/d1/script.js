console.log("DOM MANIPULATION");

/*
	This is a WEB PAGE

	<html>
		<head>
			<title></title>
		</head>
		<body>
			<div>
				<h1></h1>
				<p></p>
			</div>
		</body>
	</html>
*/

/*DOM
	
	DOM = {
		document: {
			html: {
				head: {
					title: {
	
					},
					meta: {
	
					}
				},
				body: {
					div: {
						h1: "",
						p: ""
					}
				}
			}
		}
	}

*/

//Finding HTML Elements
	console.log(document.getElementById("demo"))
	console.log(document.getElementsByTagName("h1"))
	console.log(document.getElementsByClassName("title"))

	console.log(document.querySelector("#demo"))
	console.log(document.querySelector("h1"))
	console.log(document.querySelector(".title"))

//Change HTML Elements
	//Property
		//element.innerHTML = new html content
		let myH1 = document.querySelector(".title")
		myH1.innerHTML = "Hello World"
        console.log(myH1)
        
        //element.style.property
        document.querySelector(".title").style.color = "red";

        //set attribute
        document.getElementById("demo").setAttribute("class", "sample")

        //remove attribute
        document.getElementById("demo").removeAttribute("class")

//Event Listener
//syntax: 
    //element.addEventListener("event", cb())

let firstName = document.querySelector("#txt-first-name");
let fullName = document.getElementById("txt-full-name");
let lastName = document.querySelector("#txt-last-name");

const updateName = () => {
    let txtFirst = firstName.value;
    let txtLast = lastName.value

    fullName.innerHTML = `${txtFirst} ${txtLast}`
}

firstName.addEventListener("keyup", updateName)

lastName.addEventListener("keyup", updateName)



        