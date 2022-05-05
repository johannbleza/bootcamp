console.log(`Hello World`)

let collection = []

function enqueue(element){
    collection[collection.length] = element
    return collection
}

console.log(enqueue("Johann"));
console.log(enqueue("J"));

// function dequeue(){
//     let dequeued = collection.splice(0, 1)
//     return dequeued
// }


function dequeue(){
    let dequeued = collection.splice(0, 1)
    return collection
}

console.log(dequeue())
console.log(collection)
