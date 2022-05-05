console.log("message");


// Repetition Control Struction
// - for loop
// = while loop
// - do-while loop
// - continue & break

/*
    For loop
    syntax:
    for(initial value; condition; iteration){

    }
*/

let myName = "Elito Penaranda";   
// console.log(myName.length) 
// console.log(myName[13]);

for(let letter = 0; letter < myName.length; letter++){
    console.log(myName[letter])
}

// for (let i = 0; i<= 5; i++){
//     // i = 0
//     // true
//     console.log(`This is number ${i}`);
// }

let fruits = ["mango", "apple", "orange", "singkamas"];
fruits[4] = `banana`;
fruits[5] = `strawberry`; 
console.log(fruits.length)


let index = 0;

for(index; index < fruits.length; index++){
    // initial value = 0
    // 3 <= 4
    // 4 <= 4
    console.log(fruits[index])
}

// Continue and Break

    //skip the number if it is even number
    //exit the loop if it is less than 10

    let b = 20;

    for (b; b >0; b--){

        if(b % 2 === 0){
            continue; 
        }

        console.log(b);

        if(b < 10){
            break;
        }

    }

    

    // Mini Activity

        // Display each character of the value of string variable in the console

        // Skill all the letter "e" in the string

        // exit the loop if the character is letter "u"

        let string = `Amiel Buenaventura`;

        let char = 0;

        for (char; char < string.length; char++){
            if (string[char] == `e`){
                continue;
            }

            if (string[char] == `u`){
                break;
            }

            console.log(string[char]);
        }

        /* Nested Loops

        // outer loop
            for(){

            //inner loop
                for(){}
        }

        */

        // for(let x= 0; x <= 10; x++) {
        //     console.log(x);

        //     //inner loop
        //     for(let y= 0; y <= 10; y++){
        //         console.log(`${x} + ${y} = ${x+y}`)
        //     }
        // }