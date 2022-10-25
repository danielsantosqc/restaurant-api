const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
	// name: String,
	email: String,
	password: {
		type: String,
		required: true,
	},
	date: Date,
})

// aquí se usa y se indica el nombre de la colección (users)
const userModel = mongoose.model('users', mySchema)

module.exports = userModel
