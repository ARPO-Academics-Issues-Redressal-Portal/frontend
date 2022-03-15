import './App.css';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentInterface/StudentDashboard'
import GenQueryAddition from './pages/GenQueryAddition'
import ForumView from './pages/ForumView';
import PrivateQuery from './pages/PrivateQuery';
import InstructorForumDasboard from './pages/InstructorForumDasboard';
import InstructorHomepage from './pages/InstructorHomepage';
import NotifDashboard from './pages/NotifDashboard';
import AddNotification from './pages/AddNotification';
import HelpDesk from './pages/HelpDesk';

// for routing
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'



function App() {
  return (<>

   

    {/* <div className="App ">
      {/* <LoginPage />  */}
      {/* <StudentDashboard /> */}

        {/* <InstructorHomepage /> */}
      {/*<GenQueryaddition /> */}
    

        {/* <InstructorHomepage />  */}
       {/* <ForumView />  */}
        {/* <GenQueryAddition />  */}
  
       {/* <ForumView/>  */}
       {/* <DashboardForumQuery/> */}
        {/* <NotifDashboard/>  */}
      {/* <InstructorForumDasboard/>  */}
      {/* <AddNotification/> */}
      {/* <PrivateQuery/> */}
      {/* <HelpDesk/> */}
    {/* </div> */} 
    {/* regarding routing */}
    <NavBar/>
     <Routes> 
      <Route path='/' elememt= {< InstructorHomepage />} />
      <Route path='ForumView' elememt={<ForumView />} />
    </Routes>
    </>
  );
}


export default App;
