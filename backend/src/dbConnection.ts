import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const mongoURI = process.env.URI;

if (!mongoURI) {
  throw new Error('MongoDB connection string is not defined in the .env file');
}

// Function to connect to MongoDB
const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoURI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to MongoDB:');
    process.exit(1); // Exit the process with an error code
  }
};

export default connectToDatabase;  // Use export to export the function
