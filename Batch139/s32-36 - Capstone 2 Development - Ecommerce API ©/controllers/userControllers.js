
const User = require("./../models/User");
const Course = require("./../models/Course");

const bcrypt = require("bcrypt");
const auth = require("./../auth");

module.exports.checkEmail = (reqBody) => {
	const {email} = reqBody

	return User.findOne({email: email}).then( (result, error) => {
		// console.log(email)
		if(result != null){
			return `Email already exists`
		} else {
			console.log(result)	//null bec email does not exist
			if(result == null){
				return true
			} else {
				return error
			}
		}
	})
}


// module.exports.register = (reqBody) => {

// 	let newUser = new User({
// 		firstName: reqBody.firstName,
// 		lastName: reqBody.lastName,
// 		email: reqBody.email,
// 		password: bcrypt.hashSync(reqBody.password, 10),
// 		mobileNo: reqBody.mobileNo
// 	})
// 	//save()
// 	return newUser.save().then( (result, error) => {
// 		if(result){
// 			return true
// 		} else {
// 			return error
// 		}
// 	})
// }

module.exports.register = (reqBody) => {
	const {email} = reqBody

	return User.findOne({email: email}).then( (result, error) => {
		if(result != null){
			return false
		} else {
			let newUser = new User({
				firstName: reqBody.firstName,
				lastName: reqBody.lastName,
				email: reqBody.email,
				password: bcrypt.hashSync(reqBody.password, 10),
				mobileNo: reqBody.mobileNo
			})
		
			return newUser.save().then( (result, error) => {
				if(result){
					return true
				} else {
					return false
				}
			})
		}
	})
}

module.exports.getAllUsers = () => {

	return User.find().then( (result, error) => {
		if(result){
			return result
		} else {
			return error
		}
	})
}


module.exports.login = (reqBody) => {
	const {email, password} = reqBody;

	return User.findOne({email: email}).then( (result, error) => {

		if(result == null){
			return false
		} else {
			//what if we found the email and is existing, but the pw is incorrect
			let isPasswordCorrect = bcrypt.compareSync(password, result.password)

			if(isPasswordCorrect == true){
				return {access: auth.createAccessToken(result)}
			} else {
				return false
			}
		}
	})
}

module.exports.getProfile = (data) => {
	const {id} = data

	return User.findById(id).then((result, err) => {


		if(result != null){
			result.password = "";
			return result
		} else {
			return false
		}
	})
}

module.exports.enroll = async (data) => {
	const {userId, courseId} = data

	//looking for matching document of a user
	const userEnroll = await User.findById(userId).then( (result, err) => {
		if(err){
			return err
		} else {
			result.enrollments.push({courseId: courseId})

			if(result.enrollments.courseId != courseId){
				return result.save().then((result, err) => {
					if(err){
						return err
					} else {
						return result
					}
				})
			} else {
				return false
			}
		}
	})

	//look for matching document of a course
	const courseEnroll = await Course.findById(courseId).then( (result, err) => {
		if(err){
			return err 
		} else {
			result.enrollees.push({userId: userId})
			 
			if(result.enrollees.userId != userId){
				return result.save().then( (result, err) => {
					if(err){
						return err
					} else {
						return true
					}
				} )
			} else {
				return false
			}
		}
	})

	//to return only one value for the function enroll
	if(userEnroll && courseEnroll){
		return true
	} else {
		return false
	}
} 