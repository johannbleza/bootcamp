let getCube = number => `The cube of ${number} is ${number**3}`

console.log(getCube(3))

let address = [`258 Washington Ave NW`, `California`, `90011`];

let [street, state, zip] = address;

console.log(`I live at ${street}, ${state} ${zip}`);

let animal = {
    name: `Lolong`,
    type: `saltwater crocodile`,
    weight: `1075 kgs`,
    measurement: `20 ft 3 in`
}

let {name, type, weight, measurement} = animal

console.log(`${name} was a ${type}. He weighed at ${weight} with a measurement of ${measurement}.`)

let numbers = [1, 2, 3, 4, 5, 15];

numbers.forEach( number => console.log(number))

let reduceNumber = 0;

numbers.forEach( number => reduceNumber += number)

console.log(reduceNumber);

class Dog {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
}

let myDog = new Dog(`Frankie`, 5, `Miniature Dachshund`);

console.log(myDog)


