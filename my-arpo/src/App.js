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


function App() {
  return (
    <div className="App ">
      {/* <LoginPage />  */}
      {/* <StudentDashboard /> */}

       {/* <InstructorHomepage /> */}
      {/*<GenQueryaddition /> */}
      {/* <PrivateQueryaddition /> */}

        {/* <InstructorHomepage />  */}
       {/* <ForumView /> */}
        {/* <GenQueryAddition />  */}
      {/* <PrivateQueryAddition />  */}
      {/* <ForumView/> */}
       {/* <DashboardForumQuery/> */}
        {/* <NotifDashboard/>  */}
      {/* <InstructorForumDasboard/>  */}
      <AddNotification/>
      {/* <PrivateQuery/> */}
      {/* <HelpDesk/> */}
    </div>
  );
}


export default App;
