const express = require('express');

const router = express.Router()
const productController = require('./../controllers/productControllers');

router.post('/product',productController.insertProductCtrl)

router.put('/product',productController.updateProductCtrl)

router.delete('/product',productController.deleteProductCtrl)

router.get('/product',productController.getAllProductCtrl)

module.exports = router