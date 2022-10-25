const express = require('express');
const response = require('./response');
const controller = require('../components/products/products_services');
const validatorHandler = require('../controller/middlewares/validator_handler');
const {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
} = require('../controller/schemas/product_schema');

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Holaaaa");
// });

// get all products
router.get('/', (req, res) => {
  try {
    controller.getProducts().then((listProducts) => {
      response.success(req, res, listProducts, 200);
      console.log(listProducts);
    });
  } catch (error) {
    next(error);
  }
});

// get one product
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await controller.getOneProduct(id);
      response.success(req, res, result, 200);
      console.log(result);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  (req, res, next) => {
    controller
      .addProduct(req.body)
      .then((result) => {
        response.success(req, res, 'creado correctamente', 201);
        console.log(result);
      })
      .catch((error) => {
        next(error);
      });
  }
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    console.log(req.params.id, req.body);
    try {
      const result = await controller.updateProduct(req.params.id, req.body);
      response.success(req, res, 'actualizado correctamente ', 201);
      // console.log(result);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const result = await controller.deleteProduct(req.params.id);
      response.success(req, res, 'Producto  borrado ', 200);
      console.log(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
