import express from 'express';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

// Route to create a product
router.post('/products', createProduct);

// Route to get all products
router.get('/products', getProducts);

// Route to get a single product by ID
router.get('/products/:id', getProductById);

// Route to update a product by ID
router.put('/products/:id', updateProduct);

// Route to delete a product by ID
router.delete('/products/:id', deleteProduct);

export default router;
