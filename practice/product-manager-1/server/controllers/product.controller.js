const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World"
  });
}

module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  product.create({
    title, price, description
  })
    .then((product) => console.log("Product: success", product))
    .catch((err) => console.log("Something went wrong (CreateProduct)", err));
}

