import fs from "fs";
import Category from "../models/CategoryModel.js";
import Course from "../models/CourseModel.js";
import User from "../models/UserModel.js";
import path from "path";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();
import connectDB from "../config/db.js";
// connect to db
connectDB();
const __dirname = path.resolve();

const importData = async () => {
  try {
    console.log("Clearing database!");
    // clean the database
    await User.deleteMany();
    await Course.deleteMany();
    await Category.deleteMany();

    // insert the data
    console.log("__dirname", __dirname);

    // insert user data
    const usersData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/data/users.json"), "utf-8")
    );

    const usersWithHashedPassword = usersData.map((user) => {
      // create password hash
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(user.password, salt);
      return { ...user, password: hashedPassword };
    });

    const createdUsers = await User.insertMany(usersWithHashedPassword);

    const instructorUser = createdUsers.find(
      (user) => user.role === "instructor"
    ); // to be used in course as ref

    // insert category data
    const categoryData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/data/category.json"), "utf-8")
    );
    const createdCategory = await Category.insertMany(categoryData);

    const webdevCategory = createdCategory.find(
      (category) => category.name === "Web Dev"
    ); // to be used in course as ref

    const dsaCategory = createdCategory.find(
      (category) => category.name === "DSA PYTHON"
    );

    const aiCategory = createdCategory.find(
      (category) => category.name === "AI"
    );

    const designCategory = createdCategory.find(
      (category) => category.name === "Design"
    );

    // insert course
    const courses = [
      {
        title: "Complete Web dev course 2025",
        description: "Random text about the course: command not found: asdfsdf",
        price: 99,
        instructor: instructorUser.id,
        category: webdevCategory.id,
        image:
          "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Complete javascript dev course 2025",
        description: "Random text about the course: command not found: asdfsdf",
        price: 101,
        instructor: instructorUser.id,
        category: webdevCategory.id,
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=60",
      },

      {
        title: "Complete react js dev course 2025",
        description: "Random text about the course: command not found: asdfsdf",
        price: 101,
        instructor: instructorUser.id,
        category: webdevCategory.id,
        image:
          "https://images.unsplash.com/photo-1670057037226-b3d65909424f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Complete node js dev course 2025",
        description: "Random text about the course: command not found: asdfsdf",
        price: 101,
        instructor: instructorUser.id,
        category: webdevCategory.id,
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9kZSUyMGpzJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Complete dsa js dev course 2025",
        description: "Random text about the course: command not found: asdfsdf",
        price: 10,
        instructor: instructorUser.id,
        category: dsaCategory.id,
        image:
          "https://media.istockphoto.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.webp?a=1&b=1&s=612x612&w=0&k=20&c=2fB4km8-W3elF6qr9pUhV8nDwARZLLiWorjnjE5oq-Y=",
      },

      {
        title: "Complete AI course 2025",
        description: "Random text about the course: command not found: asdfsdf",
        price: 20,
        instructor: instructorUser.id,
        category: aiCategory.id,
        image:
          "https://media.istockphoto.com/id/2206472967/photo/ai-cloud-cloud-computing-technology-big-data-concepts.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZUyrTpkCQkK6-uV9wnPE5TyXeRKWQZPDG1jGCMEtUVw=",
      },

      {
        title: "Complete Design course 2025",
        description: "Random text about the course: command not found: asdfsdf",
        price: 20,
        instructor: instructorUser.id,
        category: designCategory.id,
        image:
          "https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzaWdufGVufDB8fDB8fHww",
      },
    ];

    await Course.insertMany(courses);

    console.log("Data is successfully added to database!");
    process.exit();
  } catch (error) {
    console.log("Error while adding data: ", error);
    process.exit(1);
  }
};
// remove data
const destroyData = async () => {
  // deleteMany queries will go here!
  // clean the database
  await User.deleteMany();
  await Course.deleteMany();
  await Category.deleteMany();
  console.log("Data destroyed");
  process.exit();
};

// logic to add script to run seed file for different methods
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
  console.log("import data");
}
