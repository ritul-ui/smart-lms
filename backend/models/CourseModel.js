import mongoose from "mongoose";

const { Schema } = mongoose;

//module schema


//lesson schema
const lessonSchema = new Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
});

const moduleSchema = new Schema({
  title: { type: String, required: true },
  lessons: [lessonSchema],
});


const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    image : {type : String, required : false},
    instructor: {
      type: Schema.ObjectId,
      ref: "User", // creating the relation with User Model
      required: true,
    },
    category: {
      type: Schema.ObjectId,
      ref: "Category", // creating the relation with Category Model
      required: true,
    },
    enrolledStudents: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
    modules: [moduleSchema],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
// Explicitly create the collection before using it
// so the collection is capped.
// await Model.createCollection();
export default Course;
