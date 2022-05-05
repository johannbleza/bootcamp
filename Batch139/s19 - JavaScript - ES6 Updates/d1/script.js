console.log("Hello World");

/*
	ES6 Updates (2015)
*/

//Exponent Operator

const firstNum = Math.pow(8, 2);
console.log(firstNum);

//you can now use **
const secondNum = 8**2;
console.log(secondNum);

/*Template Literals*/

//pre-Template Literal String
let name = "John";

let message = "Hello" + " " + name + "! Welcome to programming!";
console.log("Message without template literals: " + message);

//Strings Using Template Literals
message = `Hello ${name}! Welcome to programming!`;
console.log(`Message with template literals: ${message}`);

//Multi-line using template literals
const anotherMessage = 
`
	${name} attended a math competition.
	He won it by solving the problem 8 ** 2 with the solution of ${firstNum}.
`
console.log(anotherMessage);


//
const interestRate = 1;
const principal = 1000;

console.log(`The interest on your savings account is ${principal * interestRate}`)


/*
	Array Destructuring
*/

const fullName = ["Juan", "Dela", "Cruz"];
const pet = ["dogs", "cats", "birds"];

//pre-array destructuring
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

console.log(`Hello firstName middleName lastName! It's nice to meet you.`);

console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! It's nice to meet you.`);

//Array Destructuring
	// let/const [variableName, variableName] = array

const [firstName, middleName, lastName] = fullName
const [pet1, , pet3] = pet


console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(`Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you.`);

function introduce(){
	console.log(`Hi! My name is ${firstName} ${middleName} ${lastName}`);
	console.log(`I have three pets! I have ${pet1}, ${pet3}`)
}
introduce();

/*
	Object Destructuring

	syntax:
	let/const {propertyName, propertyName} = object
*/

const person = {
	givenName: "Jane",
	maidenName: "Dela",
	familyName: "Cruz"
}

//pre-object destructuring
console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);

//Object Destructuring
const {maidenName, familyName, givenName, nickName} = person;

console.log(givenName);		
console.log(nickName);		//undefined

const intro = `Hello ${givenName} ${maidenName} ${familyName}! It's good to see you.`
console.log(intro);



function getFullName(personObject){
	console.log(personObject);

	console.log(`My name is ${personObject.givenName} ${personObject.maidenName} ${personObject.familyName}`)
}
getFullName(person);


function getCompleteName({givenName, maidenName, lastName}){

	console.log(`My name is ${givenName} ${maidenName} ${familyName}`)
}
getCompleteName(person)


function get_FullName(personObject){
	console.log(personObject);

	const {givenName, maidenName, familyName} = personObject

	console.log(`My name is ${givenName} ${maidenName} ${familyName}`);
}
get_FullName(person);

/*
	Arrow Function

	syntax:
	let/const variableName = () => {
		//function codeblock
	}	
*/

//arrow function with multi-line codeblock
const hello = () => {
	console.log(`Hello World`)
}

//arrow function in one line (w/o curly brace)
const Hello = () => console.log(`Hello World v.2`)

function sayHello(){
	console.log(`Hello World from traditional function`)
}

hello();
Hello();
sayHello();


/*Mini ACtivity
	destructure the array elements into distinct variables and use an arrow function to introduce themselves
	display it in the console

	send screenshot to hangouts
*/

let students = ["John", "Jane", "Judy"];

const [student1, student2, student3] = students

const greeting = () => {
	console.log(`My name is ${student1}`);
	console.log(`My name is ${student2}`);
	console.log(`My name is ${student3}`);
}
greeting();

const greeting_v2 = (elements) => {
	console.log(elements)	//students array

	//array destructuring
	const [s1, s2, s3] = elements

	console.log(`Hi I'm ${s1}`);
	console.log(`Hi I'm ${s2}`);
	console.log(`Hi I'm ${s3}`);

}
greeting_v2(students);

/*Mini Activity
	display each student from students array in the console using arrow function

	send screenshot to hangouts
*/

/*students.forEach( function(){

})*/

students.forEach( (student) => console.log(student));
students.forEach( student => console.log(student));

/*
	Implicit Return Statement
*/

//traditional function
function fName(){
	return 5 * 2
}
console.log(fName());


//function expression
const fName2 = function(){
	return 3 * 3
}
console.log(fName2())

//arrow function with implicit return statement
const fName3 = () => 2 * 2
console.log(fName3())

//arrow function with explicit return statement
const fName4 = () => {
	return 2 * 9
}
console.log(fName4())


/*
	Default Function Argument Value
*/

const myName = (name = 'User') => {
	return `Good morning, ${name}`
}

console.log(myName());
console.log(myName("Maria"));


/*
	Class-Based Object Blueprints

	-allows creation/instantiation of objects using classes as blueprints

	class className {
		constructor(objectPropertyA, objectPropertyB){
			this.objectPropertyA = objectPropertyA;
			this.objectPropertyB = objectPropertyB
		}
	}
*/

class Car {
	constructor(brand, name, year){
		this.brand = brand;
		this.name = name;
		this.year = year
	}
}

const myCar = new Car();
console.log(myCar);

myCar.brand = "Ford";
myCar.name = "Ranger Raptor";
myCar.year = 2021;
console.log(myCar);

const myNewCar = new Car("Toyota", "Vios", 2021);
console.log(myNewCar);