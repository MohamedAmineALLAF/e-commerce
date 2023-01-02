const Product = require("../models/Product");
const ProductService = require("../services/ProductService");


  const getProducts =async (req, res) => {
  
    try{
      const result = await ProductService.getProducts();
      res.status(200).json(result)

    }catch(error){
      res.status(500).json({err:error})
    }

  };

  const getProductById = async (req, res) => {

    try {
      const result = await ProductService.getProductById(req.params.ProductID);
      res.status(200).json(result)  
    } catch (error) {
      res.status(500).json({err:error})
    }

    };

    const createProduct=async (req,res)=>{
      try{
          const result= await ProductService.createProduct(req.body)
          res.send('Produit ajouté ')
          
      }catch(error){
          res.status(500).json({err:error})
      }
     
  }

  const updateProductById=async (req,res)=>{
    try{
        const result= await ProductService.updateProduct(req.body)
        res.status(201).json(result)
        
    }catch(error){
        res.status(500).json({err:error})
    }
   
}


  const updateProduct = (req, res) => {
    Product.findOneAndUpdate(
      { _id: req.params.ProductID },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
        },
      },
      { new: true },
      (err, product) => {
        if (err) {
          res.send(err);
        } else res.send('Produit modifié ');
      }
    );
  };


  const deleteProduct=async (req,res)=>{
    try{
        const reslt= await ProductService.deleteProduct(req.params.ProductID)
        res.send('Produit supprimé')
    }catch(error){
        res.status(500).json({err:error})
    }
  }

  
  
  module.exports = {
    getProducts,
    createProduct,
    updateProductById,
    deleteProduct,
    getProductById
  };