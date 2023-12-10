const express = require('express');

const router = express.Router()
const customerController = require('./../controllers/customerControllers');

router.post('/customer',customerController.insertCustomerCtrl)

router.put('/customer',customerController.updateCustomerCtrl)

router.delete('/customer',customerController.deleteCustomerCtrl)

router.get('/customer',customerController.getAllCustomerCtrl)

module.exports = router