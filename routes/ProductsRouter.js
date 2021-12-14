const express = require('express');
const router = express.Router();
const { ProductsController } = require('../controllers');

// CRUD PRODUCTOS
// Create - POST
router.post('/', ProductsController.createProduct)
// Read all - GET
router.get('/', ProductsController.findAllProducts)
// Read one - GET
router.get('/:id', ProductsController.findOneProduct)
// Update - PUT
router.put('/:id', ProductsController.updateProduct)
// Delete - DELETE
router.delete('/:id', ProductsController.deleteProduct)
// Destroy - DESTROY
router.delete('/:id/destroy', ProductsController.destroyProduct)

module.exports = router;