import jwt from "jsonwebtoken";
import User from "../models/UserModel";

export const authProtect = async (req, res, next) => {
    // get token from request header
    // Bearer token
    if (!req.headers.authorization || !req.headers.authorization.starsWith('Bearer')) {
        return res.status(401).json({message: 'Unauthorized, no token!'})
    }
    try {
         const tokenArr = req.headers.authorization.split(' '); // ['Beaerer', 'token']
         const token = tokenArr[1];
         
         // decode the token
         // token info about user
         const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

         // fetch user info from userId stored in token
         req.user = await User.findById(decodedToken.user.id);
         next();

    } catch (error) {
        return res.status(401).json({message: 'Unauthorized, invalid token!'})
    }

    // router.get('/profile', authProtect, anotherMilddleware, getProfile)
}