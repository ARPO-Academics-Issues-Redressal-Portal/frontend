import React from 'react'
import {Route} from 'react-router-dom'
import InstructorHomepage from '../pages/TutorInterface/InstructorHomepage';
import CoursesPage from '../pages/TutorInterface/CoursesPage'
import CourseHomePage from '../pages/TutorInterface/CourseHomePage'
import NotifDashboard from '../pages/TutorInterface/NotifDashboard';
import InstructorForumDasboard from '../pages/TutorInterface/InstructorForumDasboard';
import PrivateQuery from '../pages/TutorInterface/PrivateQuery';
import Participants from '../pages/TutorInterface/Participants';
import HelpDesk from '../components/HelpDesk';
import Profile from '../pages/TutorInterface/Profile';


export default function () {
  return (
    <>
        {/* <Route exact path={'/tutor'}>
          <InstructorHomepage />
        </Route>

        <Route exact path={'/tutor/courses'}>
          <CoursesPage />
        </Route>

        <Route exact path={'/tutor/help'}>
          <HelpDesk />
        </Route>
        <Route exact path={'/tutor/admins'}>
          <HelpDesk />
        </Route>
        <Route exact path={'/tutor/profile'}>
          <Profile />
        </Route>

        <Route exact path={'/tutor/courses/:courseid'}>
          <CourseHomePage />
        </Route>

        <Route exact path={'/tutor/courses/:courseid/notifications'}>
          <NotifDashboard />
        </Route>

        <Route exact path={'/tutor/courses/:courseid/generalforum'}>
          <InstructorForumDasboard />
        </Route>

        <Route exact path={'/tutor/courses/:courseid/privatequery'}>
          <PrivateQuery />
        </Route>

        <Route exact path={'/tutor/courses/:courseid/participantslist'}>
          <Participants />
        </Route>

        <Route exact path={'/tutor/courses/:courseid/courseView'}>
          <CourseHomePage />
        </Route> */}

    </>
  )
}
