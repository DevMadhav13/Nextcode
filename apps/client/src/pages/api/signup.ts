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
    console.log(" hit in Backend")
    const newadmin = req.body;
    console.log(newadmin)
    const user = newadmin
    const existingAdmin = await Admin.findOne(newadmin)
    console.log(existingAdmin)
    console.log("from /signup route after admin.find")
    if (existingAdmin){      
      res.status(200).json({message: "Admin alreadyeixst"})
    }else{
      console.log(newadmin)
        const updateAdmin = new Admin(newadmin)
        console.log(updateAdmin)
        updateAdmin.save();
        const tokan = jwt.sign({username :user, role:"admin"}, secrate1,{expiresIn: '1h'});
        console.log(tokan)
        res.status(200).json({message: "Admin creat dsuccesfully ", tokan: tokan});
    }
  
}
