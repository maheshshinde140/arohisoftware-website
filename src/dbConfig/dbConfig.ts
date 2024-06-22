import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export async function connect() {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    // Log the URI to ensure it's loaded correctly
    console.log('MongoDB URI:', mongoURI);

    // Check if mongoURI is undefined
    if (!mongoURI) {
      throw new Error('MongoDB URI is not defined. Please set MONGODB_URI in your environment variables.');
    }

    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}

// import mongoose from 'mongoose';

// import dotenv from "dotenv"
// dotenv.config()

// export async function connect() {
//     try {
//         mongoose.connect(process.env.MONGO_URI!);
//         const connection = mongoose.connection;

//         connection.on('connected', () => {
//             console.log('MongoDB connected successfully');
//         })

//         connection.on('error', (err) => {
//             console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
//             process.exit();
//         })

//     } catch (error) {
//         console.log('Something goes wrong!');
//         console.log(error);
        
//     }


// }

