import React, { useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, useHistory } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import InstructorRoutes from './Routes/InstructorRoutes';
import StudentRoutes from './Routes/StudentRoutes';
import AdminsRoutes from './Routes/AdminsRoutes';
import TA_Routes from './Routes/TA_Routes';
import TechnicalStaffRoutes from './Routes/TechnicalStaffRoutes';
import HomePage from './pages/HomePage'
import HelpDesk from './components/HelpDesk';
import CoursesPage from './pages/CoursesPage';
import CourseHomePage from './pages/CourseHomePage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import GeneralForum from './pages/GeneralForum';
import PrivateQueries from './pages/PrivateQueries';
import Profile from './pages/Profile';
import AdminTsDashboard from './components/AdminTSDashboard'
import AdminTSNotifDashboard from './pages/AdminTSNotifDashboard';
import AdminTSQueryDashboard from './pages/AdminTSQueryDashboard';


function setToken() {
  sessionStorage.setItem('token', JSON.stringify(true));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  console.log(userToken)
  return userToken ? true : false
}

export default function AppRoutes() {
  let history = useHistory();
  const islog = getToken()
  const [loggedIN, setloggedIN] = useState(false)
  console.log(islog)

  if (!islog) {
    return (
      <Router>
        <Route path={"/"}>
          <Redirect to={'/login'} />
        </Route>
        <Route>
          <LoginPage history={history} setToken={setToken} setloggedIN={setloggedIN} />
        </Route>
      </Router>
    )
  }
  console.log(sessionStorage.getItem("profileId"))
  return (

    <Router>
      <Route exact path={"/"}>
        <Redirect to={"/home"} />
      </Route>

      <Route exact path={"/home"}>
        <HomePage />
      </Route>

      <Route exact path={"/courses"}>
        <CoursesPage />
      </Route>

      <Route exact path={"/manage"}>
        <AdminTsDashboard />
      </Route>

      <Route exact path={"/help"}>
        <HelpDesk />
      </Route>

      <Route exact path={"/admins"}>
        <HelpDesk />
      </Route>

      <Route exact path={"/profile"}>
        <Profile />
      </Route>

      <Route exact path={"/courses/:role/:course"}>
        <CourseHomePage />
      </Route>

      <Route exact path={"/courses/:role/:course/announcements"}>
        <AnnouncementsPage />
      </Route>

      <Route exact path={"/courses/:role/:course/generalforum"}>
        <GeneralForum />
      </Route>

      <Route exact path={"/courses/:role/:course/privatequery"}>
        <PrivateQueries />
      </Route>

      <Route exact path={'/manage/manageQueries'}>
        <AdminTSQueryDashboard />
      </Route>

      <Route exact path={'/manage/notifications'}>
        <AdminTSNotifDashboard />
      </Route>

      <StudentRoutes />
      <InstructorRoutes />
      <AdminsRoutes />
      <TA_Routes />
      <TechnicalStaffRoutes />

    </Router>

  )
}
