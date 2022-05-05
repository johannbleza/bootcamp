let trainer = {
    name: `Ash Ketchum`,
    age: 10,
    pokemon: [`Pikachu`, `Charizard`, `Squirtle`, `Bulbasaur`],
    friends: {
        hoenn: [`May`, `Max`],
        kanto: [`Brock`, `Misty`]
    },
    talk: function(){
        return `Pikachu! I choose you!`
    }
}

console.log(trainer);

console.log(`Result of dot notation:`);
console.log(trainer.name);

console.log(`Result of square bracket notation:`);
console.log(trainer[`pokemon`]);

console.log(`Result of talk method`);
console.log(trainer.talk())

function pokemon(name, lvl,){
    this.name = name;
    this.level = lvl;
    this.health = lvl*2;
    this.attack = lvl;
    this.tackle = function(target){
        console.log(`${this.name} tackled ${target.name}`);
        console.log(`${target.name}'s health is now reduced to ${target.health = target.health - this.attack}`)
        
        if (target.health <= 0){
            return `${target.name} fainted`
        }
        
    }
}

let Pikachu = new pokemon(`Pikachu`, 12);
let Geodude = new pokemon(`Geodude`, 8);
let Mewtwo = new pokemon(`Mewtwo`, 100);

console.log(Pikachu);
console.log(Geodude);
console.log(Mewtwo);

console.log(Geodude.tackle(Pikachu));
console.log(Pikachu)

console.log(Mewtwo.tackle(Geodude))
console.log(Geodude)