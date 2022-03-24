import React from 'react'
import {Route} from 'react-router-dom'
import InstructorHomepage from '../pages/InstructorInterface/InstructorHomepage';
import CoursesPage from '../pages/InstructorInterface/CoursesPage'
import CourseHomePage from '../pages/InstructorInterface/CourseHomePage'
import NotifDashboard from '../pages/InstructorInterface/NotifDashboard';
import InstructorForumDasboard from '../pages/InstructorInterface/InstructorForumDasboard';
import QueryView from '../pages/InstructorInterface/QueryView';
import Participants from '../pages/InstructorInterface/Participants';
import HelpDesk from '../components/HelpDesk';
import Profile from '../pages/InstructorInterface/Profile';


export default function () {
  return (
    <>
        <Route exact path={'/instructor'}>
          <InstructorHomepage />
        </Route>

        <Route exact path={'/instructor/courses'}>
          <CoursesPage />
        </Route>

        <Route exact path={'/instructor/help'}>
          <HelpDesk />
        </Route>
        <Route exact path={'/instructor/admins'}>
          <HelpDesk />
        </Route>
        <Route exact path={'/instructor/profile'}>
          <Profile />
        </Route>

        <Route exact path={'/instructor/courses/:courseid'}>
          <CourseHomePage />
        </Route>

        <Route exact path={'/instructor/courses/:courseid/notifications'}>
          <NotifDashboard />
        </Route>

        <Route exact path={'/instructor/courses/:courseid/generalforum'}>
          <InstructorForumDasboard />
        </Route>

        <Route exact path={'/instructor/courses/:courseid/privatequery'}>
          <QueryView />
        </Route>

        <Route exact path={'/instructor/courses/:courseid/participantslist'}>
          <Participants />
        </Route>

        <Route exact path={'/instructor/courses/:courseid/courseView'}>
          <CourseHomePage />
        </Route>

    </>
  )
}
