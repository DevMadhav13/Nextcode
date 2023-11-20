import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Typography, CardActions } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courseState } from 'store';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';

interface Course {
  _id: number;
  title: string;
  description: string;
  imageLink: string;
}

interface CoursesProps {
  course: Course;
  onClick: (id: number) => void;
}

export function AllCourses() {
  const courseData = useRecoilValue(courseState);

  return (
    <div>
      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>Courses are as below</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {courseData.course.map((course: Course) => (
          <Courses key={course._id} course={course} onClick={(id: number) => console.log(id)} />
        ))}
      </div>
    </div>
  );
}

function Courses(props: CoursesProps) {
  const router = useRouter();
  const { course } = props;

  const handleUpdateClick = () => {
    router.push(`/Editcourse?id=${course._id}`);
  };

  return (
    <div>
      <Card style={{ margin: 10, minHeight: 200 }}>
        <Typography variant="subtitle1">{course._id}</Typography>
        <Typography variant="h6">{course.title}</Typography>
        <Typography variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} alt={course.title} style={{ width: 100 }} />
        <CardActions>
          <Button
            size="small"
            color="primary"            
              onClick={handleUpdateClick}            
          >
            Update
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
