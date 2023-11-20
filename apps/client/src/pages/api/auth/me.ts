import { Admin } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';
import ensureDbIsCommected from '@/lib/dbConnection';
const secrate1 = "secrate1"

type Data = {
    message? : String
  tokan?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>)
{
    const authHeader = req.headers.authorization;
    console.log("Auth headrer from Middleware" + authHeader)
    if(authHeader){
    var authToken = authHeader.split(" ")[1];
    if (authToken) {     
        jwt.verify(authToken, secrate1, (err, user) => {
            if (err || !user || typeof(user) !== "object") {
                return res.status(403).json({message: "bad request"});
            }
            try {
              req.headers["User_Username"] = user.username;
              req.headers["UserRole"] = user.role;      
              console.log("Our user at end of middleware is ")
                    console.log(user)
                   
              next();
          } catch (error) {
                return res.status(403).json({ error: "Catched errorr from Middleware" });
            }
        });
    } else {
        return res.status(401).json({ error: "Missing authorization tokan" });
    }
  }
  else {
      return res.status(401).json({ error: "Missing authorization header" });
  }
  
}
