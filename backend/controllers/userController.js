import User from "../models/UserModel.js";

export const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  return res
    .status(200)
    .json({ id: user._id, name: user.name, email: user.email });
};

export const updateUserProfile = async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findById(req.user._id);
  user.name = name ? name : user.name;
  user.email = email ? email : user.email;
  const updatedUser = await user.save();
  return res.status(200).json({
    id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
  });
};
