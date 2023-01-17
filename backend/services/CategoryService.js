const Category = require("../models/Category")

const createCategory = async(category) => {
    
    return await Category.create(category);

  };

    const deleteCategory = async (id) => {
        return await Category.findByIdAndDelete({_id:id});
    };

    const getCategories = async() => {
        return await Category.find({})
    };

    const getCategoryById =async (id) => {

        return await Category.findOne({_id : id});
      
        };

    const updateCategory = async(category) => {
    
         return await Category.findByIdAndUpdate(category._id,category);
        
        };

module.exports = {
    getCategories,
    createCategory,
    getCategoryById,
    deleteCategory,
    updateCategory
};