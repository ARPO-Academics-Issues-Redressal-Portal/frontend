import React from 'react'
import {Route} from 'react-router-dom'
import StudentCourses from '../pages/StudentInterface/StudentCourses'
import StudentDashboard from '../pages/StudentInterface/StudentDashboard'
import StudentProfile from '../pages/StudentInterface/StudentProfile'
import StudentCourseHomePage from '../pages/StudentInterface/StudentCourseHomePage'
import HelpDesk from '../components/HelpDesk'

export default function StudentRoutes() {
  return (
    <div>
        <Route exact path={'/student'}>   
          <StudentDashboard />       
        </Route>

        <Route exact path={'/student/courses'}>
          <StudentCourses />          
        </Route>

        <Route exact path={'/student/profile'}>
            <StudentProfile />
        </Route>

        <Route exact path={'/student/help'}>
          <HelpDesk />
        </Route>

        <Route exact path={'/student/admins'}>
          <HelpDesk />
        </Route>

        <Route exact path={'/student/courses/:courseId'}>
          <StudentCourseHomePage />          
        </Route>
        
    </div>
  )
}
