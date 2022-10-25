const ProductsService = require('./products_store');
const storeService = new ProductsService();
const validatorHandler = require('./../../controller/middlewares/validator_handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../../controller/schemas/product_schema');

const boom = require('@hapi/boom');

function getProducts() {
  return new Promise(async (resolve, reject) => {
    resolve(await storeService.get());
  });
}

function addProduct(data) {
  return new Promise(async (resolve, reject) => {
    // console.log("paso por addProduct");
    const result = await storeService.add(data);
    // console.log(result,"controller")
    if (!result) {
      
      return reject(boom.badData('No se pudo guardar los datos'));
    }
    resolve(result);
  });
}

async function getOneProduct(id) {
  const result = await storeService.getOne(id);
  // console.log('paso por controller');
  if (!result) {
    // console.log('paso por controller22');
    // console.log(result);
    throw boom.notFound('producto no encontrado');
  }
  return result;
}

async function updateProduct(id, data) {
  const result = await storeService.update(id, data);
  // console.log(result)
  if (!result) {
    // console.error('[mensajeDeController] Producto no encontrado');
    // return reject('producto no encontrado');
    throw boom.notFound('Producto no encontrado');
  }
  return result;
}

async function deleteProduct(id) {
  const result = await storeService.delete(id);
  if (!result) {
    throw boom.notFound('Producto no encontrado');
  }
  return result;
}

module.exports = {
  addProduct,
  getProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
