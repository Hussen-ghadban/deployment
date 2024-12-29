import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js'

dotenv.config();
const app = express();
const mongoURI = process.env.URI;

app.use(express.json());
app.use(cors());

// Connect to the database
// Function to connect to MongoDB
const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoURI!, {
    
    });
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to MongoDB:');
    process.exit(1); // Exit the process with an error code
  }
};

connectToDatabase();

app.get('/', (req, res) => {
  res.send("Welcome to the backend");
});

app.use('/api',productRoutes)

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
