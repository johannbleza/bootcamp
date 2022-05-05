//Array of Objects

let cars = [
    {
        brand: `toyota`,
        model: `vios`,
        price: 1000000
    },
    {
        brand: `honda`,
        model: `honda city`,
        price: 700000
    },
    {
        brand: `toyota`,
        model: `corolla`,
        price: 1200000
    }
]

//find(cb())
    //iterates over items in our array and returns the item/ element which will satisfy the condition
    //find() will return the "first" item that will satisfy the conditio nadn stops its process right there.
    // If find(), cannot satisfy its condition even after iterating all of the items/ elments in the array it will return undefined

    let foundCar = cars.find(function(car){
        // console.log(car)

        return (car.brand === `toyota` && car.model === `Avalon`)
    })

    console.log(foundCar);

        if(foundCar === undefined){
            console.log(`Some data not existing!`)
        } else {
            console.log(`Data exists`);
        }

/*
	Mini-Activity:

		Create a new function called login.
			-This function should be able to receive an email and a password.
			-This function should be able to find the user with the correct email and password.
			-Save the returned user into a variable.
			-show the found user object in the console.

			Stretch Goal:
				if we can't find a user with the same email or password:
				Show an alert: Login Failed. Wrong Credentials.
				if we did find a user with the same email or password:
				Show an alert: Thank you for logging in. 

*/

let users = [

	{
		username: "kimdhyn",
		email: "dahyun@gmail.com",
		password: "dahyunTwiceu"
	},
	{
		username: "jenKimBP",
		email: "jennieSolo@gmail.com",
		password: "dududuJennie",
	},
	{
		username: "lisaBP",
		email: "lisaManoban@gmail.com",
		password: "lisaIsHere"
	}

];

function login(user,pass){

    user.find( function(cred){
        if (user === cred.email && user === cred.pass)
        return cred.username
    })
}

console.log(console.log((`dahyun@gmail.com`,"dahyunTwiceu")))