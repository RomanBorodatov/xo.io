import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {});

    console.log('MongoDB is connected...');
  } catch (error) {
    console.error('Error connecting to mongodb', error);
    process.exit(1); // Exit process with failure
  }
};
