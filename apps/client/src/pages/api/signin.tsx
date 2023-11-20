// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Admin } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';
import ensureDbIsCommected from '@/lib/dbConnection';
const secrate1 = "secrate1"

type Data = {
    message? : String
  tokan?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await ensureDbIsCommected()
    console.log(" hit in Signin Backend")
    const newadmin = req.body;
    console.log(newadmin)
    const user = newadmin
    const existingAdmin = await Admin.findOne(newadmin)
    console.log(existingAdmin)
    console.log("from /signup route after admin.find")
    if(existingAdmin){
        const username = existingAdmin.username
        console.log(username)
        const tokan = jwt.sign({username , role: "admin"},secrate1,{expiresIn : '1h'});
        res.status(200).json({message: "Admin login succesful", tokan:tokan})
      }else{
        res.status(200).json({message: "Admin doesnot exist",tokan :""})
      }
  
}
