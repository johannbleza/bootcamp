console.log(`message`);

/* 
    Arrays
        - array methods
        - aray iteration
*/

let months = [`Jan`, `Feb`, `Mar`, `April`, `May`]
console.log(months);
console.log(months[0]);
console.log(months.length);

//Basic Structure
    // elements
    // square brackets called "Array Literals"

// Two ways to initialize an array

let array = [];

// let arr = new Array();


//Array Manipulation

let count = [`one`, `two`, `three`, `four`];

//Q: How are we going to add a new elemnt at the end of an array?

    //using assignment operator(=)

    console.log(count[4]);
    count[4] = `five`;

    console.log(count);

    //push method
    count.push(`six`)
    console.log(count)

    //using push method inside of a function

    function addElement(element){
        count.push(element);
        
        console.log(count);
    }
    
    addElement(`seven`)

    count.pop();
    console.log(count);

    function removeElement(){
        count.pop();
        console.log(count)
    }

    removeElement();

    //Q: How to add an element at the beginning of the array?

        //unshift method
            // adds an lement at the beginng of an array
        count.unshift(`zero`);

        console.log(count);

        //shift method
            //removes element at the beginning of an array
        count.shift();
        console.log(count);


        let nums = [15, 32, 61, 130, 230, 13, 34];

        nums.sort();
        console.log(nums)

        nums.sort( 
            function(a, b){
                //ascending order
                //return a - b

                //descending order
                return b - a
            }
             )
        
        console.log(nums)

        //reverse method
        nums.reverse();
        console.log(nums);

        /*
            Splice & Slice
            
        */
            //Splice method
            // returns an array containing deleted elements
            //first parameter - index where to start omitting element
            //second parameter - #  of elements to be omitted
            // third parameter - eleemnts to be added/ inserted

            console.log(count);

            // let newSplice = count.splice(2);
            //     //deletes all elements from specified index
            // console.log(newSplice);

            // let newSplice = count.splice(1,2);
            // console.log(newSplice)
            // console.log(count);

            let newSplice = count.splice(1, 2, 101,102, 103);

            console.log(newSplice);
            console.log(count);

            //slice method

            let animals = [`dog`, `cat`, `hamster`, `mouse`, `bird`];
            console.log(animals)
            // let newSlice = animals.slice(2)
            //     //deletes all elements before the specified index
            // console.log(newSlice)

            let newSlice = animals.slice(1,2);
            console.log(newSlice)
            console.log(animals)

            //concat
            console.log(animals)
            console.log(count)
            let newConcat = animals.concat(count)
            console.log(newConcat)

            // join method
            let meal = [`rice`, `ulam`, `water`];

            // let newJoin = meal.join();
            // console.log(newJoin);
            

            // let newJoin = meal.join("");
            // console.log(newJoin);

            // let newJoin = meal.join("-");
            // console.log(newJoin);

            let newJoin = meal.join(" ");
            console.log(newJoin);

            //toString

            let elements = [`b`, `a`, `d`, 8, 5, `e`];
            console.log(elements);
            console.log(typeof elements[2])
            console.log(typeof elements[3])

            let newString = elements.toString();
            console.log(newString);

// Accessorrs
    // indexof()
    // lastIndexOf()

     let countries = [`US`, `PH`, `CAN`, `TAI`, `PH`, `SG`, `HK`, `PH`];
            
//indexOf()
    // finds the index of agiven element where it is "first" found.
            
let index = countries.indexOf(`PH`);
console.log(index);

// lastIndexOf()
     // finds the index of a given element where it is found.

 let lastIndex = countries.lastIndexOf(`PH`);
console.log(lastIndex);
        

// Iterators
    // -forEach()
    //map()

/* 
    forEach()
        -executes a provied function (anonymous function) once for each array element

    syntax:
        forEach()
*/ 

let days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

days.forEach(
    
    function(day){
        //statement
        console.log(day)
    }
)

// days.forEach(

//     function(day){
//         console.log(day)
//     }
// )

let bigData = [
    {fn: `Jake`, ln: `Cuenca`},
    {fn: `Piolo`, ln: `Pascual`},
    {fn: `Dingdong`, ln: `Dantes`}
]

bigData.forEach(

    function(name){
        console.log(name.ln);
    }
)

//Q: How to create a copy of an array from the original array?

// let days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
//map()
    //iterates each element in an array and retursn a new array with the same elements (or differenct values depending on the result of function's operation)
    //does not modify the orignal array

let mapNewDays = days.map(
    function(day){
        return day
    }
)

console.log(mapNewDays)


//Create a copy of a new array using forEach()

let newDays = [];


days.forEach(

    function(day){
        newDays.push(day);
    }
)

console.log(newDays);


//filter()
    //returns an array that containes elements which passes a given condition
let digits = [1, 2, 3, 4, 5];

let newFilter = digits.filter(
    function(element){
        return element < 3
    }
)

console.log(newFilter);

//includes()
let pets = [`dogs`, `cats`, `birds`, `fishes`]

let newIncludes = pets.includes(`cats`, `bjohan`)
console.log(newIncludes);

// Mini Activity

    //Create a function which checks the element in an array, that if the given word extits in an array, display the word, if not, display <word> not found

function arrayInclude(word){
    if(pets.includes(word)){
        return `${word}`
    } else return `${word} not found`
    
}

console.log(arrayInclude(`chicken`))
console.log(arrayInclude(`dogs`))

console.log(digits);
//every()
    //checks if all elements passes a given condition
let newEvery = digits.every(
    function(element){
        return element < 6
    }
)

console.log(newEvery); //returns a bolean

// let info = [firstname, lastname]

//some()
    //checks if atleast one element passes a given condition

let newSome = digits.some(
        function(element){
            return element > 2
        }
)

console.log(newSome);

//reduce()
    //evaluates elements from left to right and returns a "single value"
let newReduce = digits.reduce(
    function(a, b){
        let total = a + b

        return total
    }
)

console.log(newReduce);
console.log(newReduce / digits.length); //average if digits