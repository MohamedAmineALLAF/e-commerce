const { getCategories, createCategory,getCategoryById,updateCategoryById,deleteCategory  } = require("../controllers/CategoryController");

const router = require("express").Router();


router.route("/categories").get(getCategories).post(createCategory);

router.get("/category/:CategoryID", getCategoryById);

router.put("/category/:CategoryID", updateCategoryById);



module.exports = router;