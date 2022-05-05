console.log(`Hello World`)

//JSON Objects

// {
//     "city": "Quezon city",
//     "province": "Metro Manila",
//     "country" : "Philippines"
// }

// JSON Arrays
// "city":[
//     {
//         "city": "Quezon city",
//         "province": "Metro Manila",
//         "country": "Philippines"
//     },
//     {
//         "city": "Makati city",
//         "province": "Metro Manila",
//         "country": "Philippines"
//     }
// ]

//Converting JS Data into Stringified JSON
let batchesArr = [
    {
        batchName: `Batch 139`,
        firstName: `Imman`

    },
    {
        batchname: `Batch 139`,
        firstname: `Marge`
    }
]

console.log(batchesArr);

console.log(JSON.stringify(batchesArr));

let data = JSON.stringify({
    name: `Calvin`,
    age:18,
    address:{
        city: `Manila`,
        country: `Philippines`
    }
})

console.log(data);


let batchesJSON = `[
    {
        "batchName": "Batch 139",
         "firstName": "Calvin" 
    },
    {
        "batchName": "Batch 139",
        "firstName": "Marge"
}]`

console.log(batchesJSON);

console.log(JSON.parse(batchesJSON))