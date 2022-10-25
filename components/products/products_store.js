const userModel = require('./model_products');
const { faker } = require('@faker-js/faker');

// search if exist data of _id
// utilizar-------------

// async existData(id) {
//   const exist = await userModel.exists({
//     _id: id,
//   });
//   return exist;
// }

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  createPrice() {

    const max = 100;
    const min = 1;
    const decimalPlaces = 2;
    const rand = Math.random() * (max - min) + min;
    const power = Math.pow(10, decimalPlaces);
    
    // floor(8.885729840652472 * 100) / 100  // 8.88
    return Math.floor(rand * power) / power;
  }

  generate() {
    const limit = 2;
    for (let i = 0; i <= limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        price: this.createPrice(),
        // description: faker.lorem.paragraph(),
        type: faker.helpers.arrayElement(['comida', 'bebidas', 'postres']),
        // image: faker.image.food(),
      });
    }
  }

  add(newProduct) {
    const result = this.products.push({
      id: faker.datatype.uuid(),
      ...newProduct,
    });
    console.log('resultado', result);
    const dato = this.products[result - 1];
    return dato;
  }

  get() {
    // const result = await userModel.find();
    // console.log(result);
    return this.products;
  }

  getOne(idProduct) {
    const result = this.products.find((item) => item.id === idProduct);
    console.log('GetOne');
    console.log(result);
    return result;
  }

  update(id, data) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    }
    console.log(index);
    const product = this.products[index];
    const result = (this.products[index] = {
      ...product,
      ...data,
    });
    return result;
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    }
    const result = this.products.splice(index, 1);
    console.log(result);
    return result;
  }
}

module.exports = ProductsService;
