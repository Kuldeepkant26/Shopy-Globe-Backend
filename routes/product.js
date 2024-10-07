const express = require('express');

const router = express.Router();
const { addProductController, getAllProductsController, getOneProductController } = require('../controlers/productController')

router.post('/add', addProductController);
router.get('/products', getAllProductsController);
router.get('/products/:id', getOneProductController);

module.exports = router;
