// install a library called cookie - parser to parse the cookie
import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req,res,next) => {
      const token = req.cookies.access_token;

      if(!token){
        return next(errorHandler(401,'UnAuthorized'));
      }

      jwt.verify(token,process.env.JWT_SECRET,(err,user) =>{
        if(err){
            next(errorHandler(401,'UnAuthorized'));
        }
        req.user = user;
        next();
      });
};