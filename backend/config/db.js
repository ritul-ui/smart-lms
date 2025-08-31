import mongoose from "mongoose";

// try {
//   const connection = await mongoose.connect("mongodb://127.0.0.1:27017/test");
//   console.log("mongodb connected sucessfully");
// } catch (error) {
//   //   handleError(error);
//   console.error(error);
// }

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected sucessfully");
  } catch (error) {
    //   handleError(error);
    console.error(error);
  }
};

export default connectDB;
