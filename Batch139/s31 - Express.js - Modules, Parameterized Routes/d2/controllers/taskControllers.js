
const Task = require("./../models/Task")

module.exports.createTask = (reqBody) => {

    let newTask = new Task({
        name: reqBody.name
    })

    return newTask.save().then(result => result)
}

module.exports.getById = (params) => {

    return Task.findById(params).then(result => result)
}

module.exports.updateTask = (name) => {
    return Task.findOneAndUpdate({name: name}, {status: "complete"}, {new: true}).then(result => result)
}

// module.exports.updateTask = (name) => {

//     let status = {status: "complete"}
//     return Task.findOneAndUpdate({name: name}, status, {new: true}).then ( result => {
//         return true
//     })
// }

module.exports.getAllTasks = () => {

    return Task.find().then(result => {
        return result
    })
}