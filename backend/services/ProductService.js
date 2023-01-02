const Product = require("../models/Product");


const getProducts = async() => {
  return await Product.find({})
  };

  const getProductById =async (id) => {

    return await Product.findOne({_id : id});

    };

  

  const createProduct = async(product) => {
    
    return await Product.create(product);

  };

  const updateProduct = async(product) => {
    
    return await Product.findByIdAndUpdate(product._id,product);

  };

  

  const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete({_id:id});
  };
  
  module.exports = {
    getProducts,
    createProduct,
    deleteProduct,
    getProductById,
    updateProduct
  };