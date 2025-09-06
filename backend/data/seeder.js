import fs from "fs";
import Category from "../models/CategoryModel";
import Course from "../models/CourseModel";
import User from "../models/UserModel";

const importData = async () => {
  try {
    //clean the database
    await Course.deleteMany();
    await Category.deleteMany();
    await User.deleteMany();

    //insert the data

    const usersData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/data/users.json"), "utf-8")
    );

    const usersWithHashedPassword = usersData.map((user) => {
      //create password hash
      const salt = bcrypt.genSaltSync(10); // genrate and hash on each function call
      const hashedPassword = bcrypt.hashSync(user.password, salt);
      return { ...user, password: hashedPassword };
    });

    const createdUsers = await User.insertMany(usersWithHashedPassword);

    const instructorUser = createdUsers.find(
      (user) => user.role === "instructor"
    ); // to be used in courseas ref

    //insert category data
    const categoryData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/data/category.json"), "utf-8")
    );
    const createdCategory = await Category.insertMany(categoryData);

    const webdevCategory = createdCategory.find(
      (category) => category.name === "Web Dev"
    ); // to be used in courseas ref

    // insert course
    const courses = [
      {
        title: "Complete web dev course 2025",
        description: "lorem10dasdasd asadsdasds",
        price: 99,
        instructor: instructorUser.id,
        category: webdevCategory.id,
      },
    ];

    await Course.insertMany(courses);

    console.log("data is succesfflu added to database");
  } catch (error) {
    console.log("error while adding ddata to datbase", error);
  }

  //remove data
  const destroyData = () => {
    // deletemany queriers will go here
    console.log("data destryoyed");
  };

  // logic to add script to run seed file for different methods
};
