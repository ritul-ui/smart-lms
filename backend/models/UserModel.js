import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
    default: "student",
  },
});


const User = mongoose.model("User", userSchema);
// Explicitly create the collection before using it
// so the collection is capped.
// await Model.createCollection();
export default User;
