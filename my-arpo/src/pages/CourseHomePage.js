import React from 'react'
import { useParams } from 'react-router-dom'
import InstructorCoursesHomePage from './InstructorInterface/InstructorCourseHomePage'
import StudentCourseHomePage from './StudentInterface/StudentCourseHomePage'

export default function CourseHomePage() {
    const {role}=useParams()

    if(role==="student"){
        return <StudentCourseHomePage />
    }
    else{
        return <InstructorCoursesHomePage />
    }  
}
