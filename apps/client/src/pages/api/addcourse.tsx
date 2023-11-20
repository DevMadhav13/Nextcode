import type { NextApiRequest, NextApiResponse } from 'next';
import ensureDbIsConnected from '@/lib/dbConnection';
import { Course } from 'db';
import { ObjectId } from 'mongodb';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const NewCourse= req.body;
    await ensureDbIsConnected();
    console.log("Course received at backedn ")    
    console.log(NewCourse._id)

      if(NewCourse._id){
        
          console.log("inside if block NewCourse.ide")
          const existingCourse = await Course.findById(NewCourse._id);
              if (!existingCourse) {
                return res.status(404).json({ message: "Course not found" });
              } 
          console.log("existingCourse is " +existingCourse)
          try {   
          existingCourse.title = NewCourse.title;
          existingCourse.description = NewCourse.description;
          existingCourse.imageLink = NewCourse.imageLink;
          existingCourse.save()     
          
            
            console.log("course saved at db "+existingCourse)
            res.status(200).json({ message: "Course updated successfully" });
          } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal server error" });
          }
    }
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(200).json({ message: "Course created successfully" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      }
    
    

}