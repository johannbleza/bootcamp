console.log(`Hello`);

let joy = {
    firstGrading: 91,
    subject: `English`,
    teachers: [`Nate`, `Kaiser`, `Maria`],
    isStudent:true,
    schools: {
        city: `Manila`,
        country: `Philippines`
    },
    classmates: [
        {
            name:`Jelly`,
            batch: `139`
        },
        {
            name:`Aisha`,
            batch: `139`
        }
    ],
    description: function(){
        return `${this.subject}: ${this.firstGrading}`
    }
}

//Q: How do we access properties in an object?
    //through dot notation (.)
    //through baracket notation ( [""])

    //objectName.propertyName

console.log(joy.firstGrading); //91
console.log(joy.subject) //subject
console.log(joy[`isStudent`]) //true

console.log(joy[`teachers`]); //array
console.log(joy[`teachers`][2]); //Maria
console.log(joy.teachers[1]) //Kaiser

console.log(joy.schools) //object
console.log(joy.schools.city) // Manila

console.log(joy.classmates) //array of object
console.log(joy[`classmates`])


console.log(joy.classmates[1]); // second object
console.log(joy[`classmates`][1]); // second object

console.log(joy.classmates[1].name);

//How do we access function in joy object

console.log(joy.description());

//Q: How to add property in an object?
console.log(joy.semester); //undefined
joy.semester = `first`; 

console.log(joy);

//Removing a property in an object
delete joy.semester
console.log(joy)

/* Mini Activity

Given a set of objects:

-Compute for the average grade of each student object.
-Add the computed average of the student as a value to a new property called average to the studentGrades array of objects.
-Log the modified object array (includes the average property) to the console.

Stretch Goals:
-Round off the average into a single decimal number.

Note: Value for average property cannot be a string.

*/
const studentGrades = [
    { studentId: 1, Q1: 89.3, Q2: 91.2, Q3: 93.3, Q4: 89.8 },
    { studentId: 2, Q1: 69.2, Q2: 71.3, Q3: 76.5, Q4: 81.9 },
    { studentId: 3, Q1: 95.7, Q2: 91.4, Q3: 90.7, Q4: 85.6 },
    { studentId: 4, Q1: 86.9, Q2: 74.5, Q3: 83.3, Q4: 86.1 },
    { studentId: 5, Q1: 70.9, Q2: 73.8, Q3: 80.2, Q4: 81.8 }
];

//Solution  #1: using manual computation

let ave1 = (studentGrades[0].Q1 + studentGrades[0].Q2 + studentGrades[0].Q3 + studentGrades[0].Q4 ) /4

console.log(ave1)


studentGrades[0].average = ave1
console.log(studentGrades[0].average);

let ave2 = (studentGrades[1].Q1 + studentGrades[1].Q2 + studentGrades[1].Q3 + studentGrades[1].Q4 ) /4
console.log(ave2)
studentGrades[1].average = ave1
console.log(studentGrades[1].average);

let ave3 = (studentGrades[2].Q1 + studentGrades[2].Q2 + studentGrades[2].Q3 + studentGrades[2].Q4 ) /4
console.log(ave3)
studentGrades[2].average = ave1
console.log(studentGrades[2].average);

let ave4 = (studentGrades[3].Q1 + studentGrades[3].Q2 + studentGrades[3].Q3 + studentGrades[3].Q4 ) /4
console.log(ave4)
studentGrades[3].average = ave1
console.log(studentGrades[3].average);

//Solution # 2: Using for loop



for(let i = 0; i < studentGrades.length; i++){
    let forLoopAve = (studentGrades[i].Q1 +
    studentGrades[i].Q2 +
    studentGrades[i].Q3 +
    studentGrades[i].Q4 )/4

    console.log(forLoopAve);

    // add average property in each object
    studentGrades[i].average = forLoopAve
}

//Solution #3: Using Array method for iteration: forEach()

    studentGrades.forEach(function(element){
        //compute for the average of each element in an array
        let forEachAve = (element.Q1 + element.Q2 + element.Q3 + element.Q4) /4

        console.log(forEachAve);

        element.average = parseFloat(forEachAve.toFixed(1));
    })

    console.log(studentGrades)

    //Mini Activity

    //Get the average of the elements in the array

    let numeric = [5, 11,30 , 118, 634];

    let ave = numeric.reduce(function(a,b){
        let total = a +b;
        return total/ numeric.length;
    });

    console.log(ave);

    // Object Constructor

    let hero = {
        name: `Angela`,
        level: 1,
        role: `support`,
        health: 100,
        attack: 50,
        mana: 100,
        tackle: function(){
            console.log(`This hero tackled targetHero`)

            console.log(`targerHero's health is now reduced to heroHealth`)
        },
        faint: function(){
            console.log(`Hero fainted`)
        }
    }

    console.log(hero);

    //What if we want to create multiple heroes(object) with the same propertie? Would you prefer creating one object for each?

    //To solve this problem, we can use "Object Constructor"
        // Object Constructor serves as the blueprint of our objects
        //Objects created using "this" constructur will inherit what are the function properties and methods set by this function

    function Pokemon(name, lvl, hp){
        this.name = name;
        this.level = lvl;
        this.health = hp * 2;
        this.attack = lvl;

        this.tackle = function(target){
            console.log(`This ${this.name} tackled ${target.name}`)

            console.log(`${target.name}o's health is now reduced to heroHealth`)
        }
        this.faint = function(target){
            console.log(`${target.name} fainted`)
        }
    }

    let pickachu = new Pokemon(`Pikachu`, 5, 50)

    console.log(pickachu)
    

    let charizard = new Pokemon(`charizard`, 8, 40);

    console.log(charizard)
    console.log(pickachu.tackle(charizard))


   
    //Mini Activity

    //Create your own person self object with the use of object constructor, create a new person with different information out of the template.

    // function person(name, age, height, weight){
    //     this.name = name,
    //     this.age = age,
    //     this.height = height,
    //     this.weight = weight
    // }

    // mySelf = new person(`Johann`, 21, `5'7`, `60kg`)

    // console.log(mySelf)


    