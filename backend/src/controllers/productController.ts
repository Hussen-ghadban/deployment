import { Request, Response } from 'express';
import ProductModel from '../models/productModel.js';
// Create a new product
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, price, category } = req.body;

    const newProduct = new ProductModel({
      name,
      description,
      price,
      category,
    });

    await newProduct.save();

    res.status(201).json({
      message: 'Product created successfully!',
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating product'
    });
  }
};

// Get all products
export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({
      total: products.length,
      products
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching products'});
  }
};

// Get a single product by ID
export const getProductById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching product'});
  }
};

// Update a product by ID
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;

  try {
    const product = await ProductModel.findByIdAndUpdate(
      id,
      { name, description, price, category },
      { new: true }
    );

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.status(200).json({
      message: 'Product updated successfully',
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating product'});
  }
};

// Delete a product by ID
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findByIdAndDelete(id);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting product'});
  }
};
