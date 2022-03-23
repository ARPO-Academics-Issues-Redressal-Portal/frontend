import React from 'react'
import {Route} from 'react-router-dom'
import StudentCourses from '../pages/StudentInterface/StudentCourses'
import StudentDashboard from '../pages/StudentInterface/StudentDashboard'
import StudentProfile from '../pages/StudentInterface/StudentProfile'
import StudentCourseHomePage from '../pages/StudentInterface/StudentCourseHomePage'
import HelpDesk from '../components/HelpDesk'
import GeneralForum from '../pages/GeneralForum'

export default function StudentRoutes(props) {
  return (
    <>
        <Route exact path={'/student'}>   
          <StudentDashboard />       
        </Route>

        <Route exact path={'/student/courses'}>
          <StudentCourses profileId={props.profileId}/>          
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

        <Route exact path={'/student/courses/:courseid/generalforum'}>
          <GeneralForum />
        </Route>
        
    </>
  )
}
