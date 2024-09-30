import mongoose from 'mongoose';

const connectDatabase = async (): Promise<void> => {
  try {
    mongoose.set('strictQuery', false);

    await mongoose.connect(process.env.MONGO_URI as string);

    console.log('DB Connected Successfully');
  } catch (error) {
    console.error('DB Connection Error:', error);
  }
};

export default connectDatabase;
