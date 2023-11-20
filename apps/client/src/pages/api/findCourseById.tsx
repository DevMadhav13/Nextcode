import type { NextApiRequest, NextApiResponse } from 'next';
import {Course} from 'db'
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { Ecourse } from 'store';
import ensureDbIsCommected from '@/lib/dbConnection';

export async function findCourseById(req: NextApiRequest, res: NextApiResponse) {
  const setcourse = useSetRecoilState(Ecourse)
    
    const { courseId } = req.body;


    console.log("courseid from backed is "+courseId)
    await ensureDbIsCommected() 
    const course = await Course.findById(courseId);    
    if (course){
      setcourse(course)
        console.log("found course from backed is "+course) 
    res.status(200).json(course)
    }else{
      res.status(205).json({message : "course not found"})
    }}