let courses = [

	{
		id: "1",
		name: "Python 101",
		description: "Learn the basics of python.",
		price: 15000,
		isActive: true

	},
	{
		id: "2",
		name: "CSS 101",
		description: "Learn the basics of CSS.",
		price: 10500,
		isActive: true

	},
	{
		id: "3",
		name: "CSS 102",
		description: "Learn an advanced CSS.",
		price: 15000,
		isActive: false

	},
	{
		id: "4",
		name: "PHP-Laravel 101",
		description: "Learn the basics of PHP and its Laravel framework.",
		price: 20000,
		isActive: true

	}


]


//Create

let addCourse = newCourse =>{courses.push(newCourse), alert(`You have created ${newCourse.name}. It's price is ${newCourse.price}`)};

addCourse({id: "5",
name: "new Course",
description: "new",
price: 10000,
isActive: true})

console.log(courses)

//Retrieve
let getSingleCourse = idNum => console.log(courses.find( element => element.id === idNum))

getSingleCourse(`4`);

//Read
let getAllCourses = () => courses.forEach(element => console.log(element))

getAllCourses()

//Update
let archiveCourse = index => console.log(`Index ${index}'s isActive property is now ${courses[index].isActive = false}`);

archiveCourse(1)

console.log(courses);

//Delete
let deleteCourse = () => courses.pop();

deleteCourse();

console.log(courses)




