import axios from "axios";
import { AllCourses } from "ui";
import { useSetRecoilState } from "recoil";
import {courseState} from 'store'
import Link from 'next/link';

import { useEffect } from 'react';

export default function AllCourse() {
    const setCoursedata =  useSetRecoilState(courseState) 
  
  console.log("before use effect")
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("before api call from use effect")
        const resp = await axios.get("/api/Allcourses")
          console.log("after api call from use effect")
            console.log(resp.data)
            setCoursedata({isLoading: false,course:resp.data})
            console.log("after  api call")        

      } catch (error) {
        console.log("in error block")
        // console.error("An error occurred:", error);
      }
    };    
    console.log("before fetch call")
    fetchData()
    console.log("before fetch call") 
  }, []); 


  return (
    <div>
      <AllCourses></AllCourses>
    </div>
  );
}
