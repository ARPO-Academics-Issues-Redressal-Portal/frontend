import React from 'react'
import {BrowserRouter as Router,Route,Switch,useHistory} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import StudentCourses from './pages/StudentInterface/StudentCourses';
import StudentDashboard from './pages/StudentInterface/StudentDashboard'

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

        </Route>

      </Router>
    </div>
  )
}
