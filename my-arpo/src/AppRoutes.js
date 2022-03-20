import React from 'react'
import {BrowserRouter as Router,Route,useHistory} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import InstructorRoutes from './Routes/InstructorRoutes';
import StudentRoutes from './Routes/StudentRoutes';
import AdminsRoutes from './Routes/AdminsRoutes';
import TA_Routes from './Routes/TA_Routes';
import TechnicalStaffRoutes from './Routes/TechnicalStaffRoutes';

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
        <AdminsRoutes />
        <TA_Routes />
        <TechnicalStaffRoutes />
        
      </Router>
    </div>
  )
}
