import jwt from "jsonwebtoken";
import User from "../models/UserModel";

export const authProtect = async (req, res, next) => {
  // Bearer token
  //get toekn from request header
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return res.status(401).json({ message: "unautohorized, no token!" });
  }

  try {
    const tokenArr = req.headers.authorization.split(" "); // ['Bearer', 'toeken']
    const token = tokenArr[1];
    //decode the token
    //token info about user
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    //fetch user info from userId stored in token
    // req.user = await User.findById(decodedToken.user.id).select("-password");
    req.user = await User.findById(decodedToken.user.id);
    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token!" });
  }

  //router.get("/profile",authProtect,anothermiddleware, getProfile)
};
