const Category = require("../models/Category")

const createCategory = async(category) => {
    
    return await Category.create(category);

  };

const getCategories = async() => {
    return await Category.find({})
    };

module.exports = {
    getCategories,
    createCategory
};