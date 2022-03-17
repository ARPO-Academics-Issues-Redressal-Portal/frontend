import React from 'react'
import {BrowserRouter as Router,Route,useHistory} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import InstructorRoutes from './Routes/InstructorRoutes';
import StudentRoutes from './Routes/StudentRoutes';

export default function AppRoutes() {

  let history = useHistory();
  return (
    <div>
      <Router>
        <Route  exact path='/'>
          <LoginPage history = {history}/>          
        </Route> 

        <StudentRoutes />
        <InstructorRoutes />

        

      </Router>
    </div>
  )
}
