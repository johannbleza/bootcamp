console.log("Hello World")

num1 = prompt(`Enter first number`)
num2 = prompt(`Enter second number`)

// 3

function arithmetic(num1,num2){
    if (num1 < 10){
        console.log(ans =(parseInt(num1) + parseInt(num2)));
    }else if (num1 >= 10 && num1 <= 20){
        console.log(ans =(parseInt(num1) - parseInt(num2)));
    }else if (num1 >= 21 && num1 <= 30){
        console.log(ans =(parseInt(num1) * parseInt(num2)));
    }else console.log(ans =(parseInt(num1)/parseInt(num2)))
}

//4

arithmetic(num1,num2)

if (ans >= 10){
    alert(`greater`)
} else (console.warn(`less`))

5

userName = prompt(`Enter name:`)
userAge = prompt(`Enter age:`)

if(userName == "" || userAge == "" ){
    console.log(`Are you a time traveler?`)
} else {
    console.log(`Hi I'm ${userName} and I'm ${userAge} years old.`)
}

//6

function isLegalAge(){
    if(userAge >= 18){
        alert(`You are of legal age.`)
    }else{
        alert(`You are not allowed here.`)
    }
}

isLegalAge()

//7


function getInfo(){
    firstName = prompt(`Enter your first name:`)
    lastName = prompt(`Enter your last name:`)
    email = prompt(`Enter your Email address:`)
    password = prompt(`Enter your password:`)
    confirmPassword = prompt(`Confirm password:`)

}

getInfo()

function loginConditions(){
    if (
        firstName.length > 0 &&
        lastName.length > 0 &&
        email.length > 0 &&
        password.length >= 8 &&
        confirmPassword == password
    ) {
        alert(`Thanks for logging your information`)
    } else {
        alert(`Please fill in your Information`)
    }
}

loginConditions()