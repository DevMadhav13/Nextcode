// Updated Routelogic.tsx

import { Course } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getCourseData } from './coursehandler'; // New file where the logic will reside

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("before find statement");
    const courses = await getCourseData();    
    // console.log(courses)
    // console.log("before return from backend");
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({error});
  }
}
