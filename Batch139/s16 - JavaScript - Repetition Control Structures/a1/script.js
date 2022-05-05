console.log(`Hello World`);

userInput = prompt(`Give me a number`);


function loop(){
    console.log(`The number you have provided is ${userInput}`);
    for (userInput >= 0; userInput--;){
        if (userInput <= 50){
            console.log(`The current value is at 50. Terminating the loop`)
            break
        }

        if (userInput % 10 === 0){
            console.log(`the number is divisible by 10. Skipping the number.`);
            continue;
        }

        if (userInput % 5 === 0){
            console.log(userInput)
        }
    }
}

loop()

let string = `supercalifragilisticexpialidocious`
let consonants = "";

for (let i = 0; i < string.length -1; i++){
    if (
        string[i] == "a" ||
        string[i] == "e" ||
        string[i] == "i" ||
        string[i] == "o" ||
        string[i] == "u"
        ) continue;
        

        consonants += string[i]
}

console.log(string)
console.log(consonants)
