const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(20);
const price = Joi.number().min(1);
const type = Joi.string().alphanum();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
	type: type.required()
});
const updateProductSchema = Joi.object({
  name: name,
  price: price,
  type: type,
});
const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};
