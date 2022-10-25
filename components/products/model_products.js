const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
	name: String,
	// price: parseFloat,
	description: String,
	// image: String,
	// date: Date,
})

// aquí se usa y se indica el nombre de la colección (users)
const userModel = mongoose.model('products', mySchema)

module.exports = userModel
