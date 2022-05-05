console.log("Message");

// JS Operatos
    // - Assignment Operator (=)
    // - Arithmetic Operators
    // - Compound ASsignment Operators
    
    // - Comparison Operators
    // - Logical Operators

// Section Control Structure
    // - if else statement
    // - switch statement



// Assignment Operator (=)

let a = 14;
a = 18;

let b = a;

console.log(b)

// Arithmetic Operatos
    // + - * /
        // performs mathematical operation on numerical values/operands and returns a singe numerical value

// Examples:

// addition (+)
console.log(20 + 10)
console.log("20" + "30"); //"2030" - concatenation

//difference (-)
console.log(20 - 10); // 10

console.log("20" - "10"); // 10 - coercion
console.log("twenty" - "ten"); // NaN - Not a Number

//multiplication (*)
console.log(20 * 10);       //200
console.log("20" * "10");   //200 - coercion

console.log("tweenty" * "ten"); //NaN 

//divisiion
console.log(50/ 5);     //10
console.log("50"/ "5")  //10 - coercion

//modullo (%)
console.log(100 % 3); //1

//increment (++) && decrement (--)

let c = 30;

    //If operator comes first, it performs arithmetic operation before displaying the result
console.log( ++c) //31
console.log(c) //31

console.log(--c);
console.log(c);

    // if operand comes first before the operator, it displays the value of the pertand before performing arithmetic operation
console.log(c++);  //30
console.log(c);    //31

console.log(c--);   //31
console.log(c);     //30

//Mini Activity

    // LOg the results in the console
    // 1. Perform arithmetic Operation on two numbers
    // 2. perform arithmetic Operation on two variables with numerical values
    // 3. Multiply a number to the difference of two numbers

//1
console.log(2+2);

//2
// let x = 10;
// let y = 5;

// console.log(x-y);

//3
console.log(2*(40-15));


//PEMDAS RULE

// //solution #1:
// console.log(65+38);

// //solution #2
// let f = 50;
// let g = 10;

// console.log(f/g);

// //solution #3
// let hj = 4;

console.log( (52-29) * c );

// Compound Assignment Operator

// +=, -=, *=, %=
    //shorthand for arithmetic and assignment operaiton 
    //performs mathematicla operation first then assigning the result back to the variabl

let i = 15;

//Addition-assignment operator (+=)
console.log(i+= 3); //18
console.log(i);

let j = 15;

// console.log(j+3);   //18
// console.log(j);     //15

//Subtraction-Assignment Operator
console.log(i -= 10);    //8

//Multiplication-Assignment Operator (*=)
console.log(i*=15);     //120

//Division-Assignment Operator (/=)
console.log(i /= 2);    //60

//Modulus-Assignment Operator (%=)
console.log( i %= 8);   //4

//Example:SS 



//Equality Operator (==) or "Loose equality"
    //comapres the "sameness of value " regardless of data type (because of coercion)

console.log("Jan" == "Jan") //true
console.log(true == true);  //true
console.log(false == true); //false
console.log(true == false); //false
console.log(false == false); //true
console.log(null == undefined); //true -coercion

console.log("20" == 20);

console.log(true == 1);     //true
console.log(true == 2);     //false
console.log(false == 0);    //true
console.log(false == 1);    //false

console.log(28== 29); //false
console.log(4.00 == 4); //true
console.log(4.00 == 4.001); //true

//Q: What if I have different data type?

console.log(true =="1"); //true -coercion

//true = 1
//"1" = parsIN("1");

// console.log(parseInt("1"))
// console.log( typeof parseInt("1"))

    // Type Coercion
        // -Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers)

    // parseInt (); - for whole numbers

    //pase Float(); - for decimal numbers

    //tofixed();

    // let x = 75.68

    // console.log(parseInt("75.68"));
    // console.log(parseFloat("75.68"));
    // console.log(parseInt("75.68").toFixed(2));
    // console.log(parseFloat(x.toFixed(3)) );

    //Strict Equality Operator (===)
        //comapres "sameness of value" & data type
        //no coercion is allowed
    console.log(1 === 1); //true
    console.log(5 === "5") //false
    console.log(true === 1) //false
    console.log(null === undefined) //false
    console.log("James" === "Daniel") //false
    console.log(true === true); //true
    console.log(false === false); //true


    //Inequality Operator (!=) "LOose inequality operator"
        //compares "difference of value" regardless of data type(type coercion will take)
    console.log(false != true); //true
    console.log(3 != 3.00); //false
    console.log(null != undefined); //false
    console.log(true != "1");
   
    //Strict Inequality Operator (!==)
    console.log(false !== true); //true
    console.log(3 !== 3.00); //false
    console.log(null !== undefined); //false
    console.log(true !== "1");

    // Greater Than (>)
    console.log(100> 5);    //true
    console.log(70>180);     //falseh

    //less than (<)
    console.log (45 < 50)   //true
    console.log (67 < 45)   //true

    // Greater than or equal to (>=)
    console.log(45>=45);    //true  
    console.log(44 >= 45);  //false
    
    // Less Than or Equal to (<=)
    console.log(100<=100); //true
    console.log(1 <= .5) //false

    // Logical Operators

        //Examples:

        //AND Operator (double ampersand)
        console.log (true && true); // true
        console.log(true && false)  //false
        console.log(false && true)  //false
        console.log(false && false)  //false

        console.log( ("Max" == "Max") && (undefined == null) ) // (true && true)

        let k = true;

        console.log(k > 2 && k < 2);  //false && true
        

        let isOnline = true;
        let isBoss = false;
        let chatSiBoss = isOnline && isBoss;
        console.log(chatSiBoss);

        //OR Operator (double piple lines)
            //-evaluates to true of either of the operands is true.
            //-if both operands are false, the result is false

        console.log(true || true);  //true
        console.log(true || false); //true 
        console.log(false || true); //true
        console.log(false || false);    //false

        let l = 3;
        let m = 4;
        console.log(l > 7 || 8 < m) //false || false

        //NOT Operator
            //-reverses  / negates the value
        console.log(!true); //false
        console.log(!false); //true

        let isAdmin = true;
        let isInstructor = "1";
        let isAnswer = !isAdmin == isInstructor;

        console.log()
        

        let faveNum = 333;
        let chooseNum = 245;
        let isHigher = !(chooseNum > faveNum || faveNum >= chooseNum);
        console.log(isHigher);


        //Mini Activity

        //Q: What is the value fof Tralse?

        let isTrue = true;
        let isFalse = false;
        let isTralse = !(!isFalse != !isFalse && isFalse !== isTrue || (!isTrue != !isFalse && isFalse != !isTrue))
        
        //!(true != && true && false !== true ||(false != trie && false !+ false))
        
        //!(false ||(true && false))

        //!(false || false)
        
        //!(false)
    

        //true
        

        console.log(isTralse)

        // If Else Statement
        //     syntax:
        //     if(<condition>){
        //             //statment
        //         }

        //Example  of an if statment

        if( 20 >= 18 ) {
            console.log("Not allwed to enter")
        }

        //if else

        let myAge = 30;

        if (myAge === "30"){
            alert("Hello from if code block")
        } else {
            console.log("Hi from else codeblock");
        }

        //another example 

        // let gender = prompt("Enter your gender");

        // if(gender == "female"){
        //     console.log("I am a female")
        // } else
        // console.log("I am a male");

        function genderReveal(gender){
            if (gender ==  "female" || gender == "Female" || gender == "Female"){
                console.log("I am a female");
            } else {
                console.log("I am a male");
            }
        }

        let myGender = "Female";

        genderReveal("female");
        genderReveal(myGender)

        // let genderPrompt = prompt("Enter your gender: Male or Female?")
        // genderReveal(genderPrompt);


        //Mini Activity

        // Create a conditional statment that if heigth is below 150cm, display "Did not pass the minimum height requirement". If above 150, display "Pass the minimum height requirement"

        // stretch goal:
        // Put it inside a function. Make use of parameter and argument

        // function heightReq(height){
        //     if (height >= 150){
        //         console.log `Pass the minimum height requirement`
        //     } else {
        //         console.log `Did not pass the minimum height requirement`
        //     }
        // }

        // let inputHeight = prompt("Enter your height in cm:");
        // heightReq(inputHeight);

        // let candidate = prompt("Enter your height(cm):");

        // function getHeight(height){
        //     if (height < 150){
        //         return "Did not pass the minimum height requirement"
        //     } else {
        //         return "Pass the minimum height requirement"
        //     }
        // }

        // console.log(getHeight(candidate))

        // let price = prompt(`Price:`)
        // if(price < 50){
        //     console.log(`affordable`);
        // } else if (price <= 75){
        //     console.log(`pricey`);
        // } else if (price < 90){
        //     console.log(`cannot afford`);
        // } else {
        //     console.log(`out of budget`)
        // }

        //Mini Activity
        
        // Determine the Typhoon Intensity wit the following data:

        //1. Windspeed of 30, not a typhoon.
        //2. Windspeed of 61, a tropical depression is detected/
        //3. Windsoeed if 62-88, a tropical storm is detected.
        //4. Windspeed of 89-117, a sever tropical storm is detected
        //5. Others, typhoon detected

        // let windSpeed = prompt(`Windspeed:`)

        // function typhoonIntensity(windSpeed){
        //     if (windSpeed < 30){
        //         return `not a typhoon.`
        //     } else if (windSpeed >= 61){
        //         return `a tropical depression is detected.`
        //     } else if (windSpeed <= 62){
        //         return ` a tropical storm is detected.`
        //     } else if (windSpeed <= 89 && windSpeed <= 117){
        //         return `a severe tropical storm is detected`
        //     } else {
        //         return `typhoon detected.`
        //     }
        // }

        // console.log(typhoonIntensity(windSpeed))

        // function typhoonIntensity(windSpeed){
        //     if (windSpeed >= 31 && Windpseed <= 61 ){
        //         return `Tropical Depression is detected`
        //     } else if (windSpeed >= 62 && windSpeed <=88){
        //         return `Tropical Storm is Detected`
        //     }
        // }

        // let num = 4;

        switch(2-1 && 2+1){
            case 1: console.log(`1`);
            break;
            case 2: console.log(`2`);
            break;
            case 3: console.log(`3`);
            break;
            case 4: console.log(`4`);
            break;
        }

        function color(){

            

            let text = document.getElementById(`input`).value
            let change = document.getElementById(`h2Element`)

            switch(text){
                case "red": h2Element.style.color = "red"
                    break;
                case "blue": h2Element.style.color = "blue"
                    break;
                case "green": h2Element.style.color = "green"
                    break;
                default: h2Element.style.color = "black"
            }
        }

        let name = "Joy Pague";

        console.log(name.length); // 9 characters

        let numbers = [1, 54, 58, 60, 75, 90, 99];
        console.log(numbers.length); // 7 elements

        let grades = [
            {first: 90},
            {second: 92},
            {third: 94},
            {fourth: 96}
        ]

        console.log(grades.length); //4

        console.log(name.length == "9") //true
        //9 == "9"

        console.log(numbers.length == 7 && grades.length > 3);
        
        
        if(numbers.length == 7 && grades.length > 4) {
            console.log(`This is from if coeblock`);
        } else {
            console.log(`this is from else codeblock`);
        }

        // Ternary Operator
            // ?=if
            // - else

            // syntax:

            // () ? <statement> : <statement>

        let legalAge = 18;

        (legalAge >= 18)? console.log (`You are already at legal age`) : console.log (`Minors are not allowed here`);

        /* Mini Activity 
            Create a function that will accept a number, if the number given by the user is odd number, display "odd number". if even number, display "even number"
        
        */
        
      //   function numType(x){
      //       // (x % 2 == 0 )? console.log `Even number` : console.log `Odd number`
      //       if (x % 2 === 0){
      //           return `Even number`
      //       } else if (x % 2 === 1){
      //           return  `Odd number`
      //       } else {
      //           return `unexpected output`
      //       }
      //   } 

      // console.log(numType("9"))

      function oddOrEven(num){

        if (typeof parseInt(num) === "number"){
            if (isNaN(num)) {
                return `Unextpected Input`
            } else {
                if (num % 2 == 0){
                    return (`Even Number`)
                } else {
                    return (`Odd Number`)
                }
            }
      };

      console.log(oddOrEven(2))

      function x(x,y)

      if ( x < 10 && y < 10) {
          return (x +y )
      }