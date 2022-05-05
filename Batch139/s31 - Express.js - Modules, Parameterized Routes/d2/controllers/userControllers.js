
//to query or manipulate database, import the model to use the model methods
const User = require("./../models/User");
    //find()
    //findOne()
    //findOneAnd..


//userController is a module for business logic/ API tasks to be done
module.exports.getAllUsers = () => {

    //function has to do the task

    //first, find the matching document/s(single or array of documents)
        //manipulating database reutrns a promise
        //.then() handles the promise
            //resolve
            //reject
   return User.find().then( (result) => {
        // console.log(result)
        return result
    })

    //return the matching document
}

module.exports.register = (reqBody) => {

    //find the matching document using model method
    return User.findOne({email: reqBody.email} ).then( (result) => {
        console.log(result)

        //if result != null, return false/ "user exist"
        //if result == null, save the user
        if(result != null){
            return `User already exists`
        } else {
            let newUser = new User({
                firstName: reqBody.firstName,
                lastName: reqBody.lastName,
                email: reqBody.email,
                mobileNo: reqBody.mobileNo,
                password: reqBody.password
            })

            return newUser.save().then(result => {
                return `User saved!`
            })
        }
    })
}

module.exports.updateUser = (email) => {

    let updateAdminStatus = {isAdmin: true}
    return User.findOneAndUpdate({email: email}, updateAdminStatus, {new: true}).then ( result => {
        return result
    })
}

module.exports.deleteUser = (email) => {
    return User.findOneAndDelete({email: email}).then( result => {
        return true
    })
}

module.exports.getSpecificUser = (email) => {

    return User.findOne({email: email}).then( result => result)
}

module.exports.getById = (params) => {

    return User.findById(params).then(result => result)
}