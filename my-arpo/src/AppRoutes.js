import React, { useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, useHistory } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import InstructorRoutes from './Routes/InstructorRoutes';
import StudentRoutes from './Routes/StudentRoutes';
import AdminsRoutes from './Routes/AdminsRoutes';
import TA_Routes from './Routes/TA_Routes';
import TechnicalStaffRoutes from './Routes/TechnicalStaffRoutes';
import HomePage from './pages/HomePage'

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
  return (

    <Router>
      <Route exact path={"/"}>
        <Redirect to={sessionStorage.getItem("profileId") + "/home"} />
      </Route>

      <Route exact path={sessionStorage.getItem("profileId") + "/home"}>
        <HomePage />        
      </Route>

      <StudentRoutes />
      <InstructorRoutes />
      <AdminsRoutes />
      <TA_Routes />
      <TechnicalStaffRoutes />
    </Router>

  )
}
