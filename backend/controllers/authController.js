import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    // get user deatils from req body
    const { name, email, password } = req.body;
    // check user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    //create password hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    //save user in database

    await user.save();

    //create and return token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5d" },
      (err, token) => {
        if (err) {
          console.error(err);
          throw new err();
        }
        //return token
        return res.status(201).json({ token });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("something went wrong");
  }
};

export const loginUser = async (req, res) => {
  // get email password from req
  try {
    console.log("login");
    const { email, password } = req.body;

    // check user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "invalid ceredintial" });
    }

    //match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid cred" });
    }
   
    //create and return token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5d" },
      (err, token) => {
        if (err) {
          console.error(err);
          throw new err();
        }
        //return token
        return res.status(200).json({ token });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("something went wrong");
  }
};
