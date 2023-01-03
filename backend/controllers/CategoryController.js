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

module.exports = {
    getCategories,
    createCategory
  };