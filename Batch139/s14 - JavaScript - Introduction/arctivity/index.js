let firstName = "John";
let lastName = "Smith";
let age = 30;
let hobbies = [
    `Biking`,
    `Mountain Climbing`,
    `Swimming`
];
let workAddress = {
    city: "Lincoln",
    houseNumber: "32",
    state: "Nebraska",
    street: "Washington",
};
let isMarried = true;

function printUserInfo(){
    console.log(`
    First Name: ${firstName}
    Last Name: ${lastName}
    Age: ${age}`)
    console.log(`Hobbies: `) 
    console.log(hobbies)
    console.log(`Work Address: `) 
    return(workAddress)
    

}

console.log(printUserInfo())


function userInfo(){
    console.log(`
    ${firstName} ${lastName} is ${age} of age.`)
    console.log(`This was printed inside printUserInfo Function:`)
    console.log(hobbies)
    console.log(`This was printed inside printUserInfo Function:`)
    console.log(workAddress)
    return(`The value of isMarried is: ${isMarried}`)

}

console.log(userInfo())

function inputUserInfo(firstName, lastName, age, hobbies, workAddress, isMarried) {
    return `
    Hello World
    First Name: ${firstName}
    Last Name: ${lastName}
    Age: ${age}
    Hobbies: ${hobbies}
    Work Address: ${workAddress}
    The value of is Married is: ${isMarried}
    `
};

console.log(inputUserInfo(`Johann`, `Bleza`, 21, [`Coding`, `Gaming`, `Running`], "Dasmarinas, Cavite", false))