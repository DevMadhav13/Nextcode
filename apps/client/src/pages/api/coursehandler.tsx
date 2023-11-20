// courseHandler.ts

import { Course } from 'db';
import ensureDbIsConnected from '@/lib/dbConnection';

export async function getCourseData() {
  await ensureDbIsConnected();
  let courses = await Course.find({}).maxTimeMS(15000);
  
  console.log("found courses after find statement in backend call");
  // console.log(courses);
    
  return courses;
}
