const { getCategories, createCategory  } = require("../controllers/CategoryController");

const router = require("express").Router();


router.route("/categories").get(getCategories).post(createCategory);





module.exports = router;