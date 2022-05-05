let collection = [];

// Write the queue functions below.

// print
function print (){
    return collection
}

// enqueue
function enqueue(element){
    collection[collection.length] = element
    return collection
}

// dequeue
function dequeue(){
    collection.splice(0,1)
    return collection
}

// front
function front(){
    return collection[0]
}

// size
function size(){
    return collection.length
}

// isEmpty
function isEmpty(){
    if (collection === []){
        return true
    } else {
        return false
    }
}

module.exports = {
    print,
    enqueue,
    dequeue,
    front,
    size,
    isEmpty
};