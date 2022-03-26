import React from 'react'
import {Route} from 'react-router-dom'

export default function StudentRoutes(props) {

  let profileId = sessionStorage.getItem("profileId")
  return (
    <>
        {/* <Route exact path={'/student/profile'}>
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

        <Route exact path={'/student/courses/:courseid/notifications'}>
          <NotifDashboard />
        </Route>

        <Route exact path={'/student/courses/:courseid/generalForum'}>
          <GeneralForum />
        </Route>

        <Route exact path={'/student/courses/:courseid/announcements'}>
          <StudentCourseAnnouncements />
        </Route>
        
        <Route exact path={'/student/courses/:courseid/privateQuery'}>
          <PrivateQuery />
        </Route>
        
        <Route exact path={'/student/courses/:courseid/courseProfile'}>
          <Profile />
        </Route>         */}
    </>
  )
}
