import axios from "axios";
import { useRouter } from 'next/router';
import { EditcourseU } from "ui";
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { courseState, Ecourse } from "store";


interface Course {
  _id?: number;
  title?: string;
  description?: string;
  imageLink?: string;
}

export default function Editcourse(){  
    const router = useRouter();
    const { id } = router.query
    console.log(id)
    const Corsatate =  useRecoilValue(courseState);
    const Setcourse =  useSetRecoilState(Ecourse);
    const editable  = Corsatate.course;
    if(!editable){
      
      const a = async function () {
      const resp = await axios.put("/api/findCourseById",{id})
      console.log("Accessed course from backnd sing accessos from editable course");
         console.log(resp.data);}
         
      a();
    }
    console.log(editable.length)
    for (let i=0;i<editable.length;i++){
      if(editable[i]._id==id){
        let Editthiscourse = editable[i]
        Setcourse (Editthiscourse)
        // console.log(Editthiscourse)
      }
     } 
    return <div>
      <EditcourseU onClick={async function (_id ,title: string, description: string, imageLink: string) {
         const resp = await axios.put("/api/addcourse",{_id,title,description,imageLink})
         console.log(resp.data);
         alert (resp.data.message)
         if(resp.data.message){
         window.location.href = "/AllCourses";
         }

      } }></EditcourseU>
      </div>
}