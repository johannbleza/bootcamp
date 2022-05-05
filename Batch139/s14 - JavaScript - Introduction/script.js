// External JS

// alert('Hello World!');


//Writing Comments

// single line comment - ctrl + /
/* multi-line comment - ctrl + shift + /
*/

// let js="challenging";

// if (js === "challenging") {
// 	alert('Javascript is challenging');
// }


// Variables and Constants

	//Variable is a container that holds data/value
		//value - a data that you assign to a variable

		let myName = "Johann";
		console.log()

		let student;		//Variable Declaration using var/let keyword
		console.log(student);

		// Variable Declaration & Initialization
		let yourName = "Sealtiel";
		console.log(yourName);

		//Initialized value to variable student
			//assigns value to a variable
		student = "Bleza";
		console.log(student)

		//Q: Can I change the value of the variable myName to a new value? - Yes

		//Re-assigning of value
		myName = "Cruz";
		console.log(myName);

		//Another type of variable is Constant
			// has fixed value, it can never be re-assigned with a new value

		const myJob = "developer";
		console.log(myJob);

		// myJob = "instructor"
		// console.log(myJob)

		//Q: Can we declare a constant without initializing a value? - No

		// const coding;
		// console.log(coding);

		var lastName = "Paraiso";
		console.log(lastName);

		var lastName = "Jhaydelle";
		console.log(lastName);

		// Q: Why is variable important?

		let brand = "mac"

		console.log("brand");
		console.log("brand");
		console.log("brand");
		console.log("brand");
		console.log("brand");
		console.log("brand");
		console.log("brand");
		console.log("brand");

		// myLastName;
		// console.log(myLastName);

		let myFirstName;
		console.log(myFirstName);



	// variable naming convention

		//case sensitive

		let color =	"pink";

		let Color = "blue";


		console.log(color);
		console.log(Color);

		//variable should describe its value


		// numbers before letters are not allowed 
		// let 3year=3

		let year3 = 3;

		let year4 = "3";

		let _year = 5;

		let $year = 6;
		console

		let single = 'single'
		console.log(single);

		let double = "double";
		console.log(double);

		let backtick = `backticks`;
		console.log(backtick);

		let sheSaid = "She said, 'Hi Joy'";
		console.log(sheSaid);

		sheSaid = "She said \"HI Joy\"";
		console.log(sheSaid);

		sheSaid = `She said, "Hi Joy"`;
		console.log(sheSaid);

		let favoriteName = `Jomar`;

		sheSaid = `She said. "Hi ${favoriteName}!"`;
		console.log(sheSaid);

		//constant naming convention

			//constant  vairable names be written in capital letters

			const PI = 3.14;
			console.log(PI);	

			const SECONDS = 60;
			const MINUTES = 60;
			const HOURS = 24;

			//if more than one word, camel case notation

			const boilingPointofWater = 100;

			const birthYear = 1993;

			const JOB = `Web Developer`;
			console.log(JOB);

			// Mini Activity

		

			let country = "Spain";
			let continent = "Europe";
			let population = "47.35 million";

			console.log(country);
			console.log(continent);
			console.log(population);

			console.log(`Our country ${country} is located in ${continent} and has a population of ${population} as of May 2020.`)


// String
	// sequence of characters
	// always wrapped in quotes or template literals

	let flower = `Tulips`;
	console.log(flower);

	let mobileNo = `+639266986282`
	console.log(mobileNo);
			
	//if no quotes or backticks, JS will confuse them with variable names

	let Manila = `Ermita`;

	let city = Manila;
	console.log(city);

// Integers/Numbers
	// whole number(integer) & decimals(float)
	//always so-called Floating point numbers
		//means that they always decimals even if we dont see it or don't define it

	let age =28;
	console.log(age);
	console.log(typeof age);

	let myAge = 30.0;
	let hisAge = 30;

	console.log(myAge == hisAge);

	//Bolean - true/fals
		//logical type that can only be true or false

	let isEarly = true;
	console.log(typeof isEarly)

	let iSEarly =  `true`;
	console.log(typeof iSEarly)

	let areLate = false;
	console.log(typeof areLate);

	console.log(isEarly === iSEarly);
	

		//naming convention Bolean:
			// -a prefix like: is, are, has, have
			// JS developers use the prefixes to distinguish a bolean from another variable by just looking at it

		//typeof operator
			// - checks waht kind of data type a variable has

			//  syntax:


	// Undefiend
		//empty value but can be assigned with a new value
	let children;
	// console.log(typeof children) //undefined

	// siblings;
	// console.log(typeof siblings) //not defined

	//Null
		//"empty value"	
		// it is an ASSIGNED VALUE to a variable that is ued to represent an empty value
	let spouse = null;
	console.log(spouse);
	console.log(typeof spouse)

	//BigIint()
		// -large numbers than the number data type can hold

	//Object
		
	let person = {
		name: "Jose Riza",
		age: 30,
		address: "Calamba, Laguna",
		isDoctor: true,
		spouse: null,
		//array
		siblings: ["Paciano",
		"Josefa", 
		"Olympia", 
		"Saturnina", 
		"Concepcion", 
		"Solenad", 
		"Maria", 
		"Lucia", 
		"Narcisa", 
		"Trinidad"]
	}

	console.log(person);

	console.log(typeof person)

	// special type of Object - Array

	let grades = [92, 94, 96, 98];
	console.log(grades);
	console.log(typeof grades);

	// Function 
	
	// console.log("Hello World!");
	// console.log("Hello World!");
	// console.log("Hello World!");
	// console.log("Hello World!");
	// console.log("Hello World!");
	// console.log("Hello World!");
	// console.log("Hello World!");
	// console.log("Hello World!");
	// console.log("Hello World!");
	// console.log("Hello World!");
	// console.log("Hello World!");

	// FUNCTION
		// it is a reusable code to prevent duplication

	//=== ANATOMY OF A FUNCTION
	//Function Declaration
		//function keyboard
		//functiion name & parenthesis
		//curly braces
			// to determine it's block of codes
			// statements are written inside the code block
	function sayHelloWorld(){
		//statement
		console.log("Hello World!");
		console.log("Hello World!");
		console.log("Hello World!");
		console.log("Hello World!");
		console.log("Hello World!");
		console.log("Hello World!");
		console.log("Hello World!");
		console.log("Hello World!");
		console.log("Hello World!");
		console.log("Hello World!");
		console.log("Hello World!");
	}

	//Function Invocation
		//  function name & parenthesis
	// sayHelloWorld(); //10 sets of hello world
	// sayHelloWorld(); //10 sets of hello world
	// sayHelloWorld(); //10 sets of hello world

	//Another example of a function:

	function greeting(firstName, lastName) {
		console.log(`Hi ${firstName} ${lastName} ! How are you?`);
	}

	greeting("Johann", "Bleza");
	greeting("Marge", "Escano");
	greeting("Kaiser", "Tabuada");

// Mini Activty

function totalSum(x,y,z) {
	console.log(x+y+z)
};

totalSum(10,20,30);

function product(a, b) {
	console.log('The product of two numbers are:');
	return (a * b)
}

console.log(product(2,4));

function totalDifference(num1, num2, num3){
	return (`The difference of three numbers ${num1} - ${num2} - ${num3} is ${num1 - num2 - num3}`)
}

console.log(totalDifference(9,3,1))