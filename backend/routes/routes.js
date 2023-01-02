const { getProducts, createProduct ,updateProductById , deleteProduct ,getProductById } = require("../controllers/ProductController");

const router = require("express").Router();


router.get("/products", getProducts);

router.get("/product/:ProductID", getProductById);

router.post("/products", createProduct);

router.put("/product/:ProductID", updateProductById);

router.delete("/product/:ProductID", deleteProduct);


module.exports = router;