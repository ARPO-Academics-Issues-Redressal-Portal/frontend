import React from 'react'
import {BrowserRouter as Router,Route,useHistory} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import StudentCourses from './pages/StudentInterface/StudentCourses';
import StudentDashboard from './pages/StudentInterface/StudentDashboard'
import InstructorHomepage from './pages/InstructorInterface/InstructorHomepage';
import CoursesPage from './pages/InstructorInterface/CoursesPage'
import CourseHomePage from './pages/InstructorInterface/CourseHomePage'
import NotifDashboard from './pages/InstructorInterface/NotifDashboard';
import InstructorForumDasboard from './pages/InstructorInterface/InstructorForumDasboard';
import PrivateQuery from './pages/InstructorInterface/PrivateQuery';
import Participants from './pages/InstructorInterface/Participants';
import HelpDesk from './pages/InstructorInterface/HelpDesk';
import Profile from './pages/InstructorInterface/Profile';

export default function AppRoutes() {

  let history = useHistory();
  return (
    <div>
      <Router>
        <Route  exact path='/'>
          <LoginPage history = {history}/>          
        </Route>        

        <Route exact path={'/student'}>   
          <StudentDashboard />       
        </Route>

        <Route exact path={'/student/courses'}>
          <StudentCourses />          
        </Route>

        <Route exact path={'/student/profile'}>

          
        </Route>

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
          <PrivateQuery />
        </Route>

        <Route exact path={'/instructor/courses/:courseid/participantslist'}>
          <Participants />
        </Route>

        <Route exact path={'/instructor/courses/:courseid/courseView'}>
          <CourseHomePage />
        </Route>

      </Router>
    </div>
  )
}
