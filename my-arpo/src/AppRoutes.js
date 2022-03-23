import React,{useState} from 'react'
import {BrowserRouter as Router,Route,useHistory} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import InstructorRoutes from './Routes/InstructorRoutes';
import StudentRoutes from './Routes/StudentRoutes';
import AdminsRoutes from './Routes/AdminsRoutes';
import TA_Routes from './Routes/TA_Routes';
import TechnicalStaffRoutes from './Routes/TechnicalStaffRoutes';

export default function AppRoutes() {

  const [profileId, setprofileId] = useState("")

  let history = useHistory();
  return (
    <div>
      <Router>
        <Route  exact path='/'>
          <LoginPage history = {history} setprofileId = {setprofileId}/>          
        </Route> 

        <StudentRoutes profileId = {profileId}/>
        <InstructorRoutes profileId = {profileId}/>
        <AdminsRoutes profileId = {profileId}/>
        <TA_Routes profileId = {profileId}/>
        <TechnicalStaffRoutes profileId = {profileId} />
        
      </Router>
    </div>
  )
}
