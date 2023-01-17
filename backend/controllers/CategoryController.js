const Category = require("../models/Category");
const CategoryService = require("../services/CategoryService");

const getCategories =async (req, res) => {
  
    try{
      const result = await CategoryService.getCategories();
      res.status(200).json(result)

    }catch(error){
      res.status(500).json({err:error})
    }

  };

  const createCategory=async (req,res)=>{
    try{
        const result= await CategoryService.createCategory(req.body)
        res.send('Category ajouté ')
        
    }catch(error){
        res.status(500).json({err:error})
    }
   
}

const deleteCategory=async (req,res)=>{
  try{
      const reslt= await CategoryService.deleteCategory(req.params.ProductID)
      res.send('Category supprimé')
  }catch(error){
      res.status(500).json({err:error})
  }
}

const updateCategoryById=async (req,res)=>{
  try{
      const result= await CategoryService.updateCategory(req.body)
      res.status(201).json(result)
      
  }catch(error){
      res.status(500).json({err:error})
  }
 
}

const getCategoryById = async (req, res) => {

  try {
    const result = await CategoryService.getCategoryById(req.params.CategoryID);
    res.status(200).json(result)  
  } catch (error) {
    res.status(500).json({err:error})
  }

  };



module.exports = {
    getCategories,
    createCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategory
  };