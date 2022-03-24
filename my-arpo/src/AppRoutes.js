import React,{useState} from 'react'
import {BrowserRouter as Router,Route,useHistory} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import InstructorRoutes from './Routes/InstructorRoutes';
import StudentRoutes from './Routes/StudentRoutes';
import AdminsRoutes from './Routes/AdminsRoutes';
import TA_Routes from './Routes/TA_Routes';
import TechnicalStaffRoutes from './Routes/TechnicalStaffRoutes';

function setToken() {
  sessionStorage.setItem('token', JSON.stringify(true));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  console.log(userToken)
  return userToken?true:false
}

export default function AppRoutes() {
  let history = useHistory();
  const islog = getToken()
  const [loggedIN, setloggedIN] = useState(false)
  console.log(islog)

  if(!islog){
      return <LoginPage history = {history} setToken = {setToken} setloggedIN={setloggedIN}/>  
  }
  return (
    <div>
      <Router>
        <StudentRoutes />
        <InstructorRoutes />
        <AdminsRoutes />
        <TA_Routes />
        <TechnicalStaffRoutes />        
      </Router>
    </div>
  )
}
