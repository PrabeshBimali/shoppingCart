const router = require("express").Router()
const {getAllProducts, getProductById} = require("../controller/productControllers")

router.get("/", getAllProducts);


router.get("/:id", getProductById);

module.exports = router;