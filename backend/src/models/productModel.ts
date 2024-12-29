import mongoose, { Schema, Document } from 'mongoose';

// Define the Product interface that extends the Document type from mongoose
interface Product extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
}

// Create a schema for the Product
const productSchema: Schema<Product> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true, // Add createdAt and updatedAt fields
  }
);

// Create the model from the schema
const ProductModel = mongoose.model<Product>('Product', productSchema);

export default ProductModel;
