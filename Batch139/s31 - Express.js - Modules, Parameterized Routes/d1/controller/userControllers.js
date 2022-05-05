
const User = require('./../models/User.js');

module.exports.createUser = (reqBody) => {

	//Model.method()
	let userName = reqBody.userName;
	User.findOne({userName: userName}, (err, result) => {
		// console.log(result)	null

		if(result != null){
			return `User already exist`
		} else {
			let newUser = new User({
				userName: reqBody.userName
			})

			newUser.save((error, result) => {
				// console.log(result)
				if(error){
					return error
				} else {
					return `New user saved: ${result}`
				}
			})
		}
	})

}

module.exports.getAll = () => {
	//model.find()
	return User.find({}, (err, result) => {
		if(err){
			return err
		} else (
			console.log(result)
		)
	})
}