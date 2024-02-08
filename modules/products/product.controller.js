const productSchema = require("./product.model");

const createProduct = (payload) => {
  return productSchema.create(payload);
};

const getAllProduct = () => {
  return productSchema.find();
};

const getProductById = (_id) => {};

const updateProduct = (_id, payload) => {};

const deleteProduct = (_id) => {
  return productSchema.deleteOne({ _id });
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
